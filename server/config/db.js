import { PrismaClient } from '@prisma/client';
import { seedDatabase } from '../utils/seed.js';

export const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    console.log('Connecting to Supabase PostgreSQL database via Prisma...');
    await prisma.$connect();
    console.log('Prisma Client connected successfully to Supabase PostgreSQL.');
    
    // Run seed check
    await seedDatabase();
  } catch (error) {
    console.error(`Supabase PostgreSQL Connection Error: ${error.message}`);
    console.log('Express server will run, but database queries will fail until database parameters are corrected.');
  }
};
