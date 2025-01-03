'use server';
import { prisma } from '../../prisma/script';
import { Pet } from './definitions';

// prisma - find a user by their email
export const getUserByEmail = async (email: string) => {
	return await prisma.user.findFirst({
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
	id: string = '19379352-b3e9-45d3-9d2a-4135d495f576',
	name: string,
	type: Pet['type'],
	breed: string,
	gender: Pet['gender'],
	{ age, comments }: Partial<Pet>,
	compatibility: Pet['compatibility'],
	image: string
) => {
	try {
		await prisma.$transaction(async (tx) => {
			const pet = await tx.pet.create({
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
			const rehome = await tx.rehomed.create({
				data: {
					petId: pet.id,
					userId: id
				}
			});
			
			return { pet, rehome };
		});
	} catch (e) {
		console.error('Failed to rehome pet:', e);
		throw e;
	}
};

// prisma - retrieve all available pets
export const prismaGetAvailablePets = async () => {
	return await prisma.pet.findMany({});
};

// prisma - get the pets rehomed by a given user
export const getRehomedPets = async (id: string = '19379352-b3e9-45d3-9d2a-4135d495f576') => {
	const findUser = await prisma.user.findUnique({
		where: { id },
		include: { rehomed: true }
	});
	
	if (findUser) {
		const petIds = findUser.rehomed.map((pet) => pet.petId);
		return await prisma.pet.findMany({
			where: {
				id: { in: petIds }
			}
		});
	}
	
	return 'User not found';
};

// prisma - get the pets adopted by a given user
export const getAdoptedPets = async (id: string = '19379352-b3e9-45d3-9d2a-4135d495f576') => {
	const findUser = await prisma.user.findUnique({
		where: { id },
		include: { adopted: true }
	});
	
	if (findUser) {
		const petIds = findUser.adopted.map((pet) => pet.petId);
		return await prisma.pet.findMany({
      where: {
        id: { in: petIds }
      }
    });
	}
	
	return 'User not found';
};