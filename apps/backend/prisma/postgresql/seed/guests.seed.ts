import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedGuest() {
  console.log('Seeding Guests...');
  // Criando convidados
  const guest1 = await prisma.guest.create({
    data: {
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
    },
  });

  const guest2 = await prisma.guest.create({
    data: {
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
    },
  });

  // Associando convidados ao evento
  await prisma.eventGuest.createMany({
    data: [
      {
        eventId: 1,
        guestId: guest1.id,
        status: 'CONFIRMED',
        companions: 1,
        offerValue: 50.0,
        offerQuantity: 1,
        eventOfferId: 1,
      },
      {
        eventId: 1,
        guestId: guest2.id,
        status: 'PENDING',
        companions: 2,
        offerValue: 100.0,
        offerQuantity: 1,
        eventOfferId: 2,
      },
    ],
  });

  console.log('Seeding completed!');
}
