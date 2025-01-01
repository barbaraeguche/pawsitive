import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PetInfo } from '@/lib/definitions';

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
	// ... you will write your Prisma Client queries here
	
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
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})


// {
// 	id: '5d1127f4-bd5b-4a5a-8f94-304d88ed6bde',
// 		name: 'Alice',
// 	email: 'alice@example.com',
// 	password: 'hello'
// }

// {
// 	pet: {
// 		id: '345e2af7-270b-4f94-8d63-235bcdeb91d3',
// 			name: 'Alice',
// 			type: 'cat',
// 			breed: 'bengal',
// 			gender: 'female',
// 			age: '2 years',
// 			compatibility: [ 'kids', 'cats' ],
// 			image: '/cat.jpg',
// 			comments: 'Alice is a very sweet cat'
// 	},
// 	rehome: {
// 		id: 4,
// 			petId: '345e2af7-270b-4f94-8d63-235bcdeb91d3',
// 			userId: '5d1127f4-bd5b-4a5a-8f94-304d88ed6bde'
// 	}
// }
