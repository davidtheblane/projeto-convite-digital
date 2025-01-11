import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Injectable()
export class GuestService {
  constructor(private prisma: PrismaProvider) { }

  create(createGuestDto: CreateGuestDto) {
    const { events, ...guestData } = createGuestDto;
    const data = {
      ...guestData,
      events: {
        create: events.map((event) => ({ event: { connect: { id: event.id } } })),
      }
    }

    return this.prisma.guest.create({ data });

  }

  findAll() {
    return this.prisma.guest.findMany();
  }

  findOne(id: number) {
    return this.prisma.guest.findUnique({ where: { id } });
  }

  update(id: number, updateGuestDto: UpdateGuestDto) {
    const { events, ...guestData } = updateGuestDto;

    const data = {
      ...guestData,
      events: {
        create: events.map((event) => ({ event: { connect: { id: event.id } } })),
      }
    }
    return this.prisma.guest.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.guest.delete({ where: { id } });
  }

  async saveCandidate(alias: string, convidado: CreateGuestDto) {
    // find event
    const event = await this.prisma.event.findUnique({
      where: { alias }
    });

    // cria candidato e evento no candidato
    const guestData = {
      ...convidado,
      events: {
        create: [
          { event: { connect: { id: event.id } }, }
        ]
      }
    }

    return await this.prisma.guest.create({
      data: guestData
    });

    // // salva candidato no evento
    // const eventData = {
    //   ...event,
    //   guests: {
    //     create: [
    //       { guest: { connect: { id: guest.id } } }
    //     ]
    //   }
    // }

    // return await this.prisma.event.update({
    //   where: { alias },
    //   data: eventData
    // });
  }
}
