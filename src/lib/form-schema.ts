import { z } from 'zod';

const RehomeSchema = z.object({
	id: z.string(),
	name: z.string().min(3, { message: 'Please enter a name, at least 3 characters' }),
	type: z.enum(['cat', 'dog'], { message: 'Please select a type' }),
	breed: z.string().min(3, { message: 'Please enter a breed, at least 3 characters' }),
	gender: z.enum(['male', 'female'], { message: 'Please select a gender' }),
	age: z.custom<string>((val) => {
		return typeof val === 'string' && (
			/^\d+month(s)?$/.test(val) || /^\d+yr(s)?$/.test(val) || /^\d+yr(s)? \d+month(s)?$/.test(val)
		);
	}, { message: 'Format: Xmonth(s) or Xyr(s) or Xyr(s) Ymonth(s)' }),
	compatibility: z.array(
		z.enum(['dogs', 'cats', 'small kids']), { message: 'Please select at least one option' }
	),
	image: z.custom<File>((val) => {
		return val instanceof File && ['image/jpeg', 'image/png'].includes(val.type) && val.size <= 5 * 1024 * 1024;
	}, { message: 'Please select a file less than 5MB' }),
	comments: z.string().min(20, { message: 'Please enter at least 20 characters' })
});

export const RehomePet = RehomeSchema.omit({ id: true });