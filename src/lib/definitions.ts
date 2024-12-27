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
	gender: 'male' | 'female';
	age: string;
	compatibility: Array<'dogs' | 'cats' | 'small kids'>;
	image: string;
	comments: string;
	// rehomer: Pick<User, 'email'>;
};

export type AvailablePetsRecord = Partial<Omit<PetRecord, 'type' | 'gender' | 'compatibility'>> & {
	type: string;
	gender: string;
	compatibility: string[];
};

export type Contact = {
	email: string;
	message: string;
};

export type PetRecordState = {
	errors?: {
		type?: string[];
		breed?: string[];
		gender?: string[];
		age?: string[];
		compatibility?: string[];
		image?: string[];
		comments?: string[];
		// rehomer?: string[];
	};
	message?: string | null;
};

export type ContactState = {
	errors?: {
		email?: string;
		message?: string;
	},
	message?: string | null;
};