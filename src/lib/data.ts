'use server';
import { prisma } from '../../prisma/queries';
import { PetInfo } from './definitions';

// prisma - find a user by their email
export const getUserByEmail = async (email: string) => {
	return prisma.user.findFirst({
		where: {
			email: {
				equals: email,
				mode: 'insensitive'
			}
		}
	});
};

// prisma - create a new user
export const prismaCreateUser = async (
	name: string,
	email: string,
	password: string
) => {
	await prisma.user.create({
		data: {
			name,
			email,
      password
		}
	});
};

// prisma - add a new pet to both databases using transaction for atomicity
export const prismaRehomePet = async (
	name: string,
	type: PetInfo['type'],
	breed: string,
	gender: PetInfo['gender'],
	{ age, comments }: Partial<PetInfo>,
	compatibility: PetInfo['compatibility'],
	image: string
) => {
	await prisma.$transaction(async (tx) => {
		const pet = await tx.petInfo.create({
			data: {
				name,
				type,
				breed,
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
		where: { id },
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
		where: { id },
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

// '58260b12-9c8f-48b7-9538-147896d674ed'