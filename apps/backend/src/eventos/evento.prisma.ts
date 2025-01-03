import { Injectable } from '@nestjs/common';
import { IEvent, IEventGuest, StatusPresence } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) { }

  salvar(evento: IEvent) {
    return this.prisma.event.create({
      data: {
        ...(evento as any),
        convidados: { create: evento.guests },
      },
    });
  }

  salvarConvidado(evento: IEvent, convidadoCompleto: IEventGuest) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { eventId, guestId, eventOfferId, id, ...convidadoCompletoData } = convidadoCompleto;
    return this.prisma.eventGuest.create({
      data: {
        ...convidadoCompletoData,
        status: convidadoCompleto.status === 'CONFIRMED' ? StatusPresence.CONFIRMED : StatusPresence.REFUSED,
        event: { connect: { id: eventId } },
        guest: { connect: { id: guestId } },
        eventOffer: { connect: { id: eventOfferId } }
      },
    });
  }

  async buscarTodos(): Promise<IEvent[]> {
    return this.prisma.event.findMany() as any;
  }

  async buscarPorId(
    id: number,
    completo: boolean = false,
  ): Promise<IEvent | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: { guests: completo },
    }) as any;
  }

  async buscarPorAlias(
    alias: string,
    completo: boolean = false,
  ): Promise<IEvent | null> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        name: true,
        description: true,
        initialDate: true,
        local: true,
        address: true,
        image: true,
        imageBackground: true,
        alias: true,
        password: completo,
        expectedAudience: completo,
        guests: completo,
      },
      where: { alias },
    }) as any;
  }
}
