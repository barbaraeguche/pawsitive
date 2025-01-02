import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/google';
import { authConfig } from './auth.config';
import { prisma } from './prisma/queries';
import bcrypt from 'bcryptjs';
import { LoginSchema } from '@/lib/form-schema';
import { getUserByEmail } from '@/lib/data';

export const { auth, handlers, signIn, signOut } = NextAuth({
	...authConfig,
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	providers: [
		GitHub,
		Google,
		Credentials({
			async authorize(credentials) {
				// validate fields using zod
				const validatedFields = LoginSchema.safeParse(credentials);
				
				if (validatedFields.success) {
					const { email, password } = validatedFields.data;
					
					const user = await getUserByEmail(email);
					// if no password, user signed up with a provider
					if (!user || !user.password) return null;
					
					// compare password to the password in the db
					const passwordsMatch = await bcrypt.compare(password, user.password);
					if (passwordsMatch) return user;
				}
				
				return null;
			}
		})
	]
});