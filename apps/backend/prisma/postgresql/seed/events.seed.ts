import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedEvents() {
  console.log('Seeding Events...');
  // Criando ofertas para o evento
  const offer1 = await prisma.offer.create({
    data: {
      name: 'Wine Bottle',
      description: 'A nice bottle of wine.',
      value: 50.0,
    },
  });

  const offer2 = await prisma.offer.create({
    data: {
      name: 'Birthday Cake',
      description: 'A delicious birthday cake.',
      value: 100.0,
    },
  });

  await prisma.event.create({
    data: {
      name: 'Birthday Party',
      alias: 'evento-fullstack',
      startDate: new Date(),
      expectedAudience: 100,
      image:
        'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
      imageBackground:
        'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
      local: 'Av. Paulista, 123',
      description:
        'Um evento completo para aprender desenvolvimento fullstack do zero.',
      monetize: false,
      password: '123456',
      keyPix: '(11) 99999-9999',
      userId: 1,
      offers: {
        createMany: {
          skipDuplicates: true,
          data: [{ offerId: offer1.id }, { offerId: offer2.id }],
        },
      },
    },
  });
  console.log('Events seeded successfully!');
}
