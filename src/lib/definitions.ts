
export type PetInfo = {
	id: string;
	type: 'cat' | 'dog';
	breed: string;
	age: number;
	gender: 'male' | 'female';
	compatibility: Array<'dogs' | 'cats' | 'small kids'>;
	comments: string;
	rehomer: Pick<User, 'email'>;
}

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
}