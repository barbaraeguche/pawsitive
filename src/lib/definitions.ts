export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

export type PetInfo = {
	id: string;
	name: string;
	type: 'cat' | 'dog';
	breed: string;
	gender: 'male' | 'female';
	age: string;
	compatibility: Array<'dogs' | 'cats' | 'kids'>;
	image: string;
	comments: string;
};

export type AvailablePetInfo = Partial<Omit<PetInfo, 'type' | 'gender' | 'compatibility'>> & {
	type: string;
	gender: string;
	compatibility: string[];
};

export type PetInfoState = {
	values?: { [key: string]: any };
	errors?: {
		name?: string[];
		type?: string[];
		breed?: string[];
		gender?: string[];
		age?: string[];
		compatibility?: string[];
		image?: string[];
		comments?: string[];
	};
	message?: string | null;
};

export type UserState = {
	errors?: {
		name?: string[]
		email?: string[];
		password?: string[];
	},
	message?: string | null;
};