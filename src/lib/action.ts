'use server';
// import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PetInfoState } from '@/lib/definitions';
import { RehomePet } from '@/lib/form-schema';

export async function rehomePet(_prevState: PetInfoState, formData: FormData) {
	const formDataObject: { [key: string]: any } = {};
	
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
			message: 'Missing fields: failed to rehome pet.',
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