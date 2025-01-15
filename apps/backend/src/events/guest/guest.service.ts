import { HttpException, Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { IGuest } from 'core';

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

  async saveGuest(alias: string, convidado: any) {

    // find event
    const event = await this.prisma.event.findUnique({
      where: { alias },
    });

    if (!event) throw new HttpException('Evento não encontrado', 400);

    // cria candidato e evento no candidato
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { status, ...guestData } = convidado;
    const data = {
      ...guestData,
      events: {
        create: [
          { event: { connect: { id: event.id } }, }
        ]
      }
    }

    console.log('guest-data-request-back', data)

    return await this.prisma.guest.create({ data });

  }
}
