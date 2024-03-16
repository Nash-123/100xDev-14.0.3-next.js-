// Singleton Prisma Client
// Only for DEV Mode
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

console.log("inside db.ts")
const prismaClientSingleton = () => {
    console.log("Prisma Client Instainsiated")
  return client
}

declare global { // Gloval okect that takes a variable of type undefined or of type prismaClientSIngleton
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton() // Doesnt exist globalThis then run prismaClientSingelton else dont run 

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma // GlobalThis wont hotrelaod on saving 