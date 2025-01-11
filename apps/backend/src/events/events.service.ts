import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaProvider } from 'src/db/prisma.provider';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { IEvent } from 'core';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaProvider) { }

  async create(evento: IEvent) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      evento.password,
      saltRounds,
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, userId, offers, guests, ...eventData } = evento;
    console.log('event-data', eventData)

    return await this.prisma.event.create({
      data: {
        ...eventData,
        password: hashedPassword,
        user: { connect: { id: eventData.user?.id } },
        offers: { connect: offers?.map((offer) => ({ id: offer.id })) || [] }
      }
    });
  }

  async findAll() {
    return await this.prisma.event.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.event.findUnique({
      where: { id },
      include: { offers: { include: { offer: true } } },
    });
  }

  async findByAlias(alias: string) {
    console.log({ alias })
    return await this.prisma.event.findUnique({
      where: { alias }
    });
  }

  // async update(id: number, updateEventDto: UpdateEventDto) {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { offers, guests, ...eventData } = updateEventDto;

  //   return await this.prisma.event.update({ where: { id }, data: { ...eventData } });
  // }

  // async remove(id: number) {
  //   return await this.prisma.event.delete({ where: { id } });
  // }

}
