import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { getUserByEmail, getRehomedPets } from '@/lib/data';

export const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
	// const user = await getUserByEmail('barbaraeguche@icloud.com');
	// console.log(user);
	//
	// if (user) {
	// 	const rehomed = await getRehomedPets(user.id);
	// 	console.log(rehomed);
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