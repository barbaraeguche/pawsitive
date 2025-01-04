import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { prisma } from './prisma/script';
import bcrypt from 'bcryptjs';
import { LoginSchema } from '@/lib/form-schema';
import { getUserByEmail } from '@/lib/data';

export const { auth, handlers, signIn, signOut } = NextAuth({
	...authConfig,
	adapter: PrismaAdapter(prisma),
	session: {
		maxAge: 15 * 60,
		strategy: 'jwt'
	},
	jwt: { maxAge: 15 * 60 },
	providers: [
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
	],
	callbacks: {
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}
			return session;
		},
		async jwt({ token }) {
			return token;
		}
	}
});