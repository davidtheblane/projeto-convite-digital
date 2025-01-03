import { PrismaClient } from '@prisma/client';
import { eventos, IEventGuest } from 'core';

async function seed() {
  const prisma = new PrismaClient();

  const transacoes = eventos.map(async (evento) => {
    await prisma.event.create({
      data: {
        alias: evento.alias,
        password: evento.password,
        name: evento.name,
        initialDate: evento.initialDate,
        local: evento.local,
        address: evento.address,
        monetize: evento.monetize,
        keyPix: evento.keyPix,
        description: evento.description,
        image: evento.image,
        imageBackground: evento.imageBackground,
        expectedAudience: evento.expectedAudience,
        user: {
          connect: { id: evento.userId }
        },
        guests: {
          create: evento.guests.map((convidadoEvento: IEventGuest) => ({
            confirmado: convidadoEvento.status === 'CONFIRMED',
            possuiAcompanhantes: convidadoEvento.companions > 0,
            qtdeAcompanhantes: convidadoEvento.companions,
            guest: {
              create: {
                name: convidadoEvento.guest.name,
                email: convidadoEvento.guest.email,
              }
            }
          }))
        },
      },
    });
  });

  await Promise.all(transacoes);
}

seed();
