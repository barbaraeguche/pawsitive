export type ObjectValuesType = {
	[key: string]: any
};

export type User = {
	id: string;
	name: string;
	email: string;
	rehomeCount: number;
	adoptCount: number;
};

export type Pet = {
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

export type PetState = {
	values?: ObjectValuesType;
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

export type UserLoginState = {
	values?: ObjectValuesType;
	errors?: {
		email?: string[];
		password?: string[];
	},
	message?: string | null;
};

export type UserRegisterState = {
	values?: ObjectValuesType;
	errors?: {
		name?: string[]
		email?: string[];
		password?: string[];
	},
	message?: string | null;
};