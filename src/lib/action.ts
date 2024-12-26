'use server';

// import { normalizeAndLowercase } from '@/lib/utils';
import { PetRecordState } from '@/lib/definitions';
import { RehomePet } from '@/lib/form-schema';

export async function rehomePet(prevState: PetRecordState, formData: FormData) {
	// validate fields using zod
	const validatedFields = RehomePet.safeParse(Object.fromEntries(formData.entries()));
	
	// if form validation fails, return errors, otherwise continue
	if (!validatedFields.success) {
		return {
			...prevState,
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}
	
	// prepare data for insertion
	// const { type, breed, gender, age, compatibility, image, comments } = validatedFields.data;
	
	// insert into database
	
	
	
	
	
	
	
	
	console.log(validatedFields);
	
	return {
		...prevState,
		message: 'Pet rehomed successfully!',
		errors: undefined,  // clear any previous errors
	};
}
