'use server';
import { prisma } from '../../prisma/queries';
import { User, PetInfo } from './definitions';

// prisma - find a user by their email
export const getUserByEmail = async (email: string) => {
	return prisma.user.findUnique({ where: { email } });
};

// prisma - create a new user
export const prismaCreateUser = async (
	{ name, email }: Partial<User>,
	password: string
) => {
	await prisma.user.create({
		data: {
			name,
			email: email!,
      password
		}
	});
};

// prisma - add a new pet to both databases using transaction for atomicity
export const prismaRehomePet = async (
	{ name, breed, age, comments }: Partial<PetInfo>,
	type: PetInfo['type'],
	gender: PetInfo['gender'],
	compatibility: PetInfo['compatibility'],
	image: string
) => {
	await prisma.$transaction(async (tx) => {
		const pet = await tx.petInfo.create({
			data: {
				name: name!,
				type,
				breed: breed!,
        gender,
        age: age!,
        compatibility,
        image,
				comments: comments!
			}
		});
		await tx.rehomedPets.create({
			data: {
				petId: pet.id,
				userId: 'ce168e4c-d1a0-4c46-b192-ff24e734337d' //greg123
			}
		});
	});
};

// prisma - retrieve all available pets
export const prismaGetAvailablePets = async () => {
	return await prisma.petInfo.findMany({});
};

// prisma - get the pets adopted by a given user
export const getAdoptedPets = async (id: string) => {
	const findUser = await prisma.user.findUnique({
		where: { id: '58260b12-9c8f-48b7-9538-147896d674ed' },
		include: { adoptedPets: true }
	});
	
	if (findUser) {
		const petIds = findUser.adoptedPets.map((pet) => pet.petId);
		const adoptedPets = await prisma.petInfo.findMany({
			where: {
				id: { in: petIds }
			}
		});
		
		// TODO: delete before final push
		console.log(adoptedPets);
		console.log(adoptedPets);
	}
	
	return 'User not found';
};

// prisma - get the pets rehomed by a given user
export const getRehomedPets = async (id: string) => {
	const findUser = await prisma.user.findUnique({
		where: { id: '58260b12-9c8f-48b7-9538-147896d674ed' },
		include: { rehomedPets: true }
	});
	
	if (findUser) {
		const petIds = findUser.rehomedPets.map((pet) => pet.petId);
		const rehomedPets = await prisma.petInfo.findMany({
			where: {
				id: { in: petIds }
			}
		});
		
		// TODO: delete before final push
		console.log(rehomedPets);
		console.log(rehomedPets);
	}
	
	return 'User not found';
};






const pets = [
	{
		id: "1",
		name: 'Tom',
		type: "dog",
		breed: "Golden Retriever",
		gender: "male",
		age: "2 years",
		compatibility: ["dogs", "cats", "kids"],
		image: "/dog.jpg",
		comments: "Loves to play fetch and is great with children.",
	},
	{
		id: "2",
		name: 'Angela',
		type: "cat",
		breed: "Persian",
		gender: "female",
		age: "3 years",
		compatibility: ["cats", "kids"],
		image: "/cat.jpg",
		comments: "Very calm and enjoys being groomed regularly.",
	},
	{
		id: "3",
		name: 'Tom',
		type: "dog",
		breed: "Bulldog",
		gender: "male",
		age: "4 years",
		compatibility: ["dogs", "kids"],
		image: "/dog.jpg",
		comments: "Enjoys short walks and lounging indoors.",
	},
	{
		id: "4",
		name: 'Angela',
		type: "cat",
		breed: "Siamese",
		gender: "female",
		age: "1 year",
		compatibility: ["cats", "kids"],
		image: "/cat.jpg",
		comments: "Playful and very curious about her surroundings.",
	},
	{
		id: "5",
		name: 'Tom',
		type: "dog",
		breed: "Beagle",
		gender: "male",
		age: "5 years",
		compatibility: ["dogs"],
		image: "/dog.jpg",
		comments: "Energetic and loves outdoor activities.",
	},
	{
		id: "6",
		name: 'Angela',
		type: "cat",
		breed: "Persian",
		gender: "female",
		age: "3 years",
		compatibility: ["cats", "kids"],
		image: "/cat.jpg",
		comments: "Very calm and enjoys being groomed regularly.",
	},
	{
		id: "7",
		name: 'Tom',
		type: "dog",
		breed: "Golden Retriever",
		gender: "male",
		age: "2 years",
		compatibility: ["dogs", "cats", "kids"],
		image: "/dog.jpg",
		comments: "Loves to play fetch and is great with children.",
	},
	{
		id: "8",
		name: 'Angela',
		type: "cat",
		breed: "Persian",
		gender: "female",
		age: "3 years",
		compatibility: ["cats", "kids"],
		image: "/cat.jpg",
		comments: "Very calm and enjoys being groomed regularly.",
	},
	{
		id: "9",
		name: 'Tom',
		type: "dog",
		breed: "Bulldog",
		gender: "male",
		age: "4 years",
		compatibility: ["dogs", "kids"],
		image: "/dog.jpg",
		comments: "Enjoys short walks and lounging indoors.",
	},
	{
		id: "10",
		name: 'Angela',
		type: "cat",
		breed: "Siamese",
		gender: "female",
		age: "1 year",
		compatibility: ["cats", "kids"],
		image: "/cat.jpg",
		comments: "Playful and very curious about her surroundings.",
	},
];