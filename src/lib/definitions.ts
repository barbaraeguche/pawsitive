
export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

export type PetRecord = {
	id: string;
	type: 'cat' | 'dog';
	breed: string;
	age: string;
	gender: 'male' | 'female';
	compatibility: Array<'dogs' | 'cats' | 'small kids'>;
	comments: string;
	rehomer: Pick<User, 'email'>;
};

export type Contact = {
	name: string;
	email: string;
	message: string;
};

export type PetRecordState = {
	errors?: {
		type?: string;
		breed?: string;
		age?: string;
		gender?: string;
		compatibility?: string;
		comments?: string;
	},
	message?: string | null;
}

export type ContactState = {
	errors?: {
		name?: string;
		email?: string;
		message?: string;
	},
	message?: string | null;
}