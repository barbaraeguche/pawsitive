import { z } from 'zod';

const PetSchema = z.object({
	id: z.string(),
	type: z.enum(['cat', 'dog'], { message: 'Please enter a type.' }),
	breed: z.string(),
	age: z.string(),
	gender: z.enum(['male', 'female',], { message: 'Please enter a gender.' }),
	compatibility: z.array(
		z.enum(['dogs', 'cats', 'small kids'])
	).min(1, { message: 'Please select at lease one option.' }),
	comments: z.string().min(15, { message: 'Please enter at least 15 characters.' }),
	rehomer: z.string()
});

const ContactSchema = z.object({
	name: z.string().min(5, { message: 'Please enter at least 5 characters.' }),
	email: z.string().email({ message: 'Please enter a valid email address.' }),
	message: z.string().min(10, { message: 'Please enter at least 10 characters.' })
});

export const AdoptPet= PetSchema.omit({ id: true, rehomer: true });
export const RehomePet = PetSchema.omit({ id: true });
export const ContactUs = ContactSchema;