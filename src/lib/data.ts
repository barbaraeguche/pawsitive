import { prisma } from '../../prisma/queries';

export const getUserByEmail = async (email: string) => {
	return prisma.user.findUnique({ where: { email } });
}

// export const















// const prismaRehomePet = async (name: string, type: PetInfo['type'], breed: string, gender: PetInfo['gender'], age: string, compatibility: PetInfo['compatibility'], image: string, comments: string) =>
// 	await prisma.$transaction(async (tx) => {
// 		const pet = await tx.petInfo.create({
// 			data: {
// 				name,
// 				type,
//         breed,
//         gender,
//         age,
//         compatibility,
// 				image,
//         comments
// 			}
// 		});
// 		const rehome = await tx.rehomedPets.create({
// 			data: {
// 				petId: pet.id,
// 				userId: '5d1127f4-bd5b-4a5a-8f94-304d88ed6bde'
// 			}
// 		});
//
// 		return { pet, rehome };
// });
//
// const hello = await prismaRehomePet('Angela', 'cat', 'bengal', 'female', '1yr', ['kids', 'cats'], '/cat.jpg', 'she is nice');
// console.log(hello);

// const comp: PetInfo['compatibility'] = ['kids', 'cats'];
// const prismaFilterPet = async (type: PetInfo['type'], breed: string, gender: PetInfo['gender'], age: string) => await prisma.petInfo.findMany({
// 	where: {
// 		type,
// 		breed: {
// 			contains: breed,
// 			mode: 'insensitive'
// 		},
// 		gender,
// 		age: {
// 			contains: age,
// 			mode: 'insensitive'
// 		},
// 		compatibility: {
// 			hasSome: comp
// 		},
// 	}
// });

// const hello = await prismaFilterPet('cat', 'be', 'female', 'yr');
// console.log(hello);

// const findAdopted = await prisma.user.findUnique({
// 	where: {
// 		id: '5d1127f4-bd5b-4a5a-8f94-304d88ed6bde'
// 	},
// 	include: {
// 		rehomedPets: true
// 	}
// });
//
// if (findAdopted) {
// 	const petIds = findAdopted.rehomedPets.map(p => p.petId);
// 	const pets = await prisma.petInfo.findMany({
// 		where: {
// 			id: {
// 				in: petIds
// 			}
// 		}
// 	});
//
//
// 	console.log(findAdopted);
// 	console.log(pets);
// } else {
// 	console.log('User not found');
// }