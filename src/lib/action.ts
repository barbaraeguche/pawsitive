'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import { signIn } from '../../auth';
import { ObjectValuesType, PetInfoState, UserLoginState, UserRegisterState } from '@/lib/definitions';
import { RehomePet, LoginSchema, RegisterSchema } from '@/lib/form-schema';
import {prisma} from '../../prisma/queries';
import bcrypt from 'bcryptjs';

export async function rehomePet(_prevState: PetInfoState, formData: FormData) {
	const formDataObject: ObjectValuesType = {};
	
	// transform the compatibility field into an array
	for (const [key, value] of formData.entries()) {
		formDataObject[key] = key === 'compatibility' ? formData.getAll(key) : value
	}
	
	// validate fields using zod
	const validatedFields = RehomePet.safeParse(formDataObject);
	
	// if form validation fails, return errors, otherwise continue
	if (!validatedFields.success) {
		return {
			values: formDataObject,
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing fields. Failed to rehome pet.'
		};
	}
	
	// prepare data for insertion
	// const { name, type, breed, gender, age, compatibility, image, comments } = validatedFields.data;
	
	// insert into database
	try {
	
	} catch (_) {
		return { message: 'Database error: failed to rehome pet.' };
	}
	
	// revalidate the cache for the rehome page, and redirect the user
	revalidatePath('/account/rehomed');
	redirect('/account/rehomed');
}

export async function loginUser(_prevState: UserLoginState, formData: FormData)  {
	const formDataObject: ObjectValuesType = Object.fromEntries(formData.entries());
	
	// validate fields using zod
	const validatedFields = LoginSchema.safeParse(formDataObject);
	
	// if form validation fails, return errors, otherwise continue
	if (!validatedFields.success) {
		return {
			values: formDataObject,
			errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to log in.'
		};
	}
	
	// log in user
	try {
		await signIn('credentials', {
			...validatedFields.data,
			redirectTo: '/account'
		})
	} catch (err) {
		if (err instanceof AuthError) {
			switch (err.type) {
				case 'CredentialsSignin': return { message: 'Invalid credentials' }
				default: return { message: 'Something went wrong.' }
			}
		}
		throw err;
	}
	
	return {
		message: 'Email sent',
	};
}

export async function createUser(_prevState: UserRegisterState, formData: FormData)  {
	const formDataObject: ObjectValuesType = Object.fromEntries(formData.entries());
	
	// validate fields using zod
	const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData.entries()));
	
	// if form validation fails, return errors, otherwise continue
	if (!validatedFields.success) {
		return {
			values: formDataObject,
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Invalid Fields',
		};
	}
	
	const hash = await bcrypt.hash(validatedFields.data.password, 10)
	
	// log in user
	try {
		await prisma.user.create({
			data: {
				...validatedFields.data,
				password: hash
			}
		})
	} catch (err) {
		throw err;
	}
	
	return {
		message: 'Email sent',
	};
} //greg123