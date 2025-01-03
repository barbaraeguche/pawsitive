import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { getUserByEmail, getRehomedPets, prismaRehomePet } from '@/lib/data';

export const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
	// const user = await getUserByEmail('barbaraeguche@icloud.com');
	// console.log(user);
	//
	// if (user) {
	// 	const { age, comments } = { age: '1yr', comments: 'tom is actually a cat.' }
	// 	await prismaRehomePet(user.id, 'tom', 'dog', 'dachshund', 'male', { age, comments }, ['kids'], '/dog.jpg');
	//
	// 	const prevRehomed = await getRehomedPets(user.id);
	// 	console.log(prevRehomed);
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