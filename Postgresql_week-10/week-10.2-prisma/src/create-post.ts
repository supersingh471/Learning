import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
	await prisma.post.create({
		data: {
			title: "study",
			content: "learning prisma",
			published: true,
			authorId: 1
		}
	})
}

main()