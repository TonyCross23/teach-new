import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
}

// TypeScript declaration to extend the global object
declare global {
  // Adding PrismaClient to the global object for Node.js environments
  var prismaGlobal: PrismaClient | undefined;
}

// Instantiate Prisma Client only if it’s not already present
const prisma = global.prismaGlobal ?? prismaClientSingleton();

// In development mode, attach Prisma Client to global object
if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = prisma;
}

export const db = prisma;
