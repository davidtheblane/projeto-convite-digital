import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedUsers() {
  console.log('Seeding Users...');
  await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    },
  });
  console.log('Users seeded successfully!');
}
