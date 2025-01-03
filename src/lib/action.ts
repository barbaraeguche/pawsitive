'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import { signIn } from '../../auth';
import bcrypt from 'bcryptjs';
import { imageToBase64, normalizeText } from '@/lib/utils';
import { prismaCreateUser, prismaRehomePet } from '@/lib/data';
import { ObjectValuesType, PetState, UserLoginState, UserRegisterState } from '@/lib/definitions';
import { RehomePet, LoginSchema, RegisterSchema } from '@/lib/form-schema';

/**
 * this function rehomes a pet submitted by the user.
 * @param _prevState the previous state of the pet information.
 * @param formData the form data containing the pet details.
 * @return either a zod validation or database error.
 */
export async function rehomePet(_prevState: PetState, formData: FormData) {
	const formDataObject: ObjectValuesType = {};
	// transform the compatibility field into an array
	for (const [key, value] of formData.entries()) {
		formDataObject[key] = key === 'compatibility' ? formData.getAll(key) : value
	}
	
	const validatedFields = RehomePet.safeParse(formDataObject);
	// if form validation fails, return errors, otherwise continue
	if (!validatedFields.success) {
		return {
			values: formDataObject,
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}
	
	const { name, type, breed, gender, age, compatibility, image, comments } = validatedFields.data;
	// convert image to base 64
	const binaryImage = await imageToBase64(image);
	
	// insert into database
	try {
		await prismaRehomePet('19379352-b3e9-45d3-9d2a-4135d495f576', normalizeText(name), type, normalizeText(breed), gender, { age, comments }, compatibility, binaryImage);
	} catch (err) {
		console.error(err);
		return { message: 'Database error. Failed to rehome pet.' };
	}
	
	// revalidate the cache for the rehome page, and redirect the user
	revalidatePath('/account/rehomed');
	redirect('/account/rehomed');
}

/**
 * this function handles user login by validating credentials and attempting to authenticate the user.
 * @param _prevState the previous state of the user's login information.
 * @param formData the form data containing the user's details.
 * @return either a zod validation or database error.
 */
export async function loginUser(_prevState: UserLoginState, formData: FormData)  {
	const formDataObject: ObjectValuesType = Object.fromEntries(formData.entries());
	const validatedFields = LoginSchema.safeParse(formDataObject);
	
	// if form validation fails, return errors, otherwise continue
	if (!validatedFields.success) {
		return {
			values: formDataObject,
			errors: validatedFields.error.flatten().fieldErrors
		};
	}
	
	// authenticate user
	try {
		await signIn('credentials', {
			...validatedFields.data
		})
	} catch (err) {
		if (err instanceof AuthError) {
			switch (err.type) {
				case 'CredentialsSignin': return { message: 'Invalid credentials.' }
				default: {
					console.error(err);
					return { message: 'Something went wrong.' }
				}
			}
		}
		throw err;
	}
	
	return { message: null };
}

/**
 * this function handles user registration by validating credentials, hashing passwords, and inserting the user's details into the database.
 * @param _prevState the previous state of the user's registration information.
 * @param formData the form data containing the user's details.
 * @return either a zod validation or database error.
 */
export async function createUser(_prevState: UserRegisterState, formData: FormData)  {
	const formDataObject: ObjectValuesType = Object.fromEntries(formData.entries());
	const validatedFields = RegisterSchema.safeParse(formDataObject);
	
	// if form validation fails, return errors, otherwise continue
	if (!validatedFields.success) {
		return {
			values: formDataObject,
			errors: validatedFields.error.flatten().fieldErrors
		};
	}
	
	const { name, email, password } = validatedFields.data;
	// hash password
	const hashedPassword = await bcrypt.hash(password, 10);
	
	// insert into database
	try {
		await prismaCreateUser(normalizeText(name), normalizeText(email), hashedPassword);
	} catch (err) {
		console.error(err);
		return { message: 'Database error. Failed to create user.' };
	}
	
	// redirect the user back to the login page
	redirect('/login');
}