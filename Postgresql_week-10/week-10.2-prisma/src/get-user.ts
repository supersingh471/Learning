import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	//let users = await prisma.user.findMany({});

	let users = await prisma.user.findUnique({
		where: {
			id: 4
		},
		include: {
			posts: true
		}
	});
	console.log(users);
}

main()