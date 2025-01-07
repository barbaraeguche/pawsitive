'use server';
import { auth } from '../../auth';
import { prisma } from '../../prisma/client';
import { Pet } from './definitions';

// get authenticated user
export const getAuthUserId = async () => {
	const id = (await auth())?.user?.id;
	
	if (!id) {
		throw new Error('User ID not found - user may not be authenticated');
	}
	return id;
}

// prisma - try to find a user by their email
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
		},
	});
};

// prisma - rehome a pet if rehomeCount less than max value (6), increment rehomeCount by 1, all using transaction for atomicity
export const prismaRehomePet = async (
	userId: string,
	name: string,
	type: Pet['type'],
	breed: string,
	gender: Pet['gender'],
	{ age, comments }: Partial<Pet>,
	compatibility: Pet['compatibility'],
	image: string
) => {
	try {
		// check if user has reached the maximum rehomed value (6)
		const counter = await prisma.user.findUnique({
			where: { id: userId },
			select: { rehomeCount: true }
		});
		// ensure user/counter exists and check limit
		if (!counter || counter.rehomeCount >= 6) {
			return 'You can only rehome a maximum of 6 pets.'
		}
		
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
			await tx.rehomed.create({
				data: {
					petId: pet.id,
					userId
				}
			});
			await tx.user.update({
				where: { id: userId },
				data: {
					rehomeCount: { increment: 1 }
				}
			});
		});
	} catch (err) {
		console.error(`Failed to rehome pet: ${err}`);
		throw err;
	}
};

// prisma - retrieve all pets that the user did not rehome, and also the ones that haven't been adopted
export const prismaGetAvailablePets = async (userId: string) => {
	return prisma.pet.findMany({
		where: {
			AND: [
				{
					NOT: { rehomed: { userId } }
				},
				{ adopted: null }
			]
		}
	});
};

// prisma - adopt a pet if adoptCount less than max value (4), increment adoptCount by 1, all using transaction for atomicity
export const prismaAdoptPet = async (petId: string, userId: string) => {
	try {
		// check if user has reached the maximum adopted value (4)
		const counter = await prisma.user.findUnique({
			where: { id: userId },
			select: { adoptCount: true }
		});
		// ensure user/counter exists and check limit
		if (!counter || counter.adoptCount >= 4) {
			return 'You can only adopt a maximum of 4 pets.'
		}
		
		await prisma.$transaction(async (tx) => {
			await tx.adopted.create({
				data: {
					petId,
					userId
				}
			});
			await tx.user.update({
				where: { id: userId },
				data: {
					adoptCount: { increment: 1 }
				}
			});
		});
	} catch (err) {
		console.error(`Failed to adopt pet: ${err}`);
		throw err;
	}
};


// prisma - try to find a user by their id
export const getUserInformation = async (id: string) => {
	return prisma.user.findUnique({
		where: { id },
		select: {
			id: true,
			name: true,
			email: true,
			rehomeCount: true,
			adoptCount: true
		}
	});
};

// prisma - get the pets rehomed by a given user
export const getRehomedPets = async (id: string) => {
	const findUser = await prisma.user.findUnique({
		where: { id },
		include: { rehomed: true }
	});
	
	if (findUser) {
		const petIds = findUser.rehomed.map((pet) => pet.petId);
		return prisma.pet.findMany({
			where: {
				id: { in: petIds }
			}
		});
	}
	
	return 'User not found';
};

// prisma - get the pets adopted by a given user
export const getAdoptedPets = async (id: string) => {
	const findUser = await prisma.user.findUnique({
		where: { id },
		include: { adopted: true }
	});
	
	if (findUser) {
		const petIds = findUser.adopted.map((pet) => pet.petId);
		return prisma.pet.findMany({
      where: {
        id: { in: petIds }
      }
    });
	}
	
	return 'User not found';
};