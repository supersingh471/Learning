import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// const prisma = new PrismaClient({log: ['info', 'query']}) to see sql queries in terminal

async function main() {
  
	await prisma.user.create({
		data: {
			email: "vikas24@gmail.com",
			name: "Vikash"
		}
	})	
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