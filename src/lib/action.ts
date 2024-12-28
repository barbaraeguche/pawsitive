'use server';

// import { PrismaClient } from '@prisma/client';
// import { normalizeAndLowercase } from '@/lib/utils';
import { PetRecordState } from '@/lib/definitions';
import { RehomePet } from '@/lib/form-schema';

export async function rehomePet(prevState: PetRecordState, formData: FormData) {
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
			...prevState,
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}
	
	// prepare data for insertion
	const { name, type, breed, gender, age, compatibility, image, comments } = validatedFields.data;
	
	// insert into database
	// try {
	// 	const prisma = new PrismaClient();
	// 	await prisma.$transaction(async (tx) => {
	//
	// 		const yep = type as 'cat' | 'dog'
	// 		const pet = prisma.petRecord.create({
	// 			data: {
	// 				name: normalizeAndLowercase(name),
	// 				type: normalizeAndLowercase(yep),
	// 				breed: normalizeAndLowercase(breed),
	// 				gender: normalizeAndLowercase(gender),
	// 				age: normalizeAndLowercase(age),
	// 				compatibility: normalizeAndLowercase(compatibility),
	// 				image: normalizeAndLowercase(image),
	// 				comments: normalizeAndLowercase(comments)
	// 			}
	// 		})
	// 	})
	// } catch (_) {
	// 	return {
	// 		message: 'Database error: failed to rehome pet.'
	// 	}
	// }
	
	
	
	
	// rehomedPets   RehomedPets[]
	// adoptedPets   AdoptedPets[]
	
	
	return {
		...prevState,
		message: 'Pet rehomed successfully!',
		errors: undefined,  // clear any previous errors
	};
}
