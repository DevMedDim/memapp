import { PrismaClient } from '@prisma/client';
const PrismaClientSingleton = new PrismaClient();
declare global {
    var prismaGlobal: undefined | ReturnType<typeof PrismaClientSingleton>;

}
const prisma =globalThis.prismaGlobal ?? PrismaClientSingleton();
export default prisma;
if (process.env.NODE_ENV === 'production') globalThis.prismaGlobal = prisma;
