import { z } from 'zod';

const RehomeSchema = z.object({
	id: z.string(),
	name: z.string().min(3, { message: 'Please enter a name' }),
	type: z.enum(['cat', 'dog'], { message: 'Please select a type' }),
	breed: z.string().min(3, { message: 'Please enter a breed' }),
	gender: z.enum(['male', 'female'], { message: 'Please select a gender' }),
	age: z.custom<string>((val) => {
		return typeof val === 'string' && (
			/^\d+yr(s)? \d+month(s)?$/.test(val) || /^\d+month(s)?$/.test(val)
		);
	}, { message: 'Format: Xyrs Ymonths or Ymonths' }),
	compatibility: z.array(
		z.enum(['dogs', 'cats', 'small kids'])
	).min(1, { message: 'Please select at least one option' }),
	image: z.custom<File>((val) => {
		return val instanceof File && ['image/jpeg', 'image/png'].includes(val.type) && val.size <= 5 * 1024 * 1024;
	}, { message: 'Please select a file less than 5MB' }),
	comments: z.string().min(20, { message: 'Please enter at least 20 characters' })
});

export const RehomePet = RehomeSchema.omit({ id: true });