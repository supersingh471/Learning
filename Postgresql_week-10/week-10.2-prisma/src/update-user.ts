import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
	const user = await prisma.user.update({
		where: {
			id: 4
		},
		data: {
			name: "Sushil"
		}
	});
	console.log(user);
}

main();