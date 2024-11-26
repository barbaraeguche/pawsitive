'use server';

// import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
	AdoptPet, RehomePet, ContactUs
} from '@/lib/form-schemas';
import { PetRecordState, ContactState } from '@/lib/definitions';


export async function adoptPet(prevState: PetRecordState, formData: FormData) {
	// validate forms using zod
	const validatedFields = AdoptPet.safeParse(Object.fromEntries(formData.entries()));
	
	// return errors if validation fails
	if(!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: ''
		};
	}
	
	// insert data into database
	try {
	
	} catch (error) {
		return {
			message: `Database error: ${error}`
		};
	}
	
	// revalidate the cache for the adoption page and redirect the user
	revalidatePath('');
	redirect('');
}

export async function rehomePet(prevState: PetRecordState, formData: FormData) {
	// validate forms using zod
	const validatedFields = RehomePet.safeParse(Object.fromEntries(formData.entries()));
	
	// return errors if validation fails; REMOVE THE ? FROM ERRORS
	if(!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: ''
		};
	}
	
	// insert data into database
	try {
	
	} catch (error) {
		return {
			message: `Database error: ${error}`
		};
	}
	
	// revalidate the cache for the adoption page and redirect the user
	revalidatePath('');
	redirect('');
}

export async function contactUs(prevState: ContactState, formData: FormData) {
	// validate forms using zod
	const validatedFields = ContactUs.safeParse(Object.fromEntries(formData.entries()));
	
	// return errors if validation fails; REMOVE THE ? FROM ERRORS
	if(!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: ''
		};
	}
	
	//send email
}