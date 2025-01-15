import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaProvider } from 'src/db/prisma.provider';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { IEvent } from 'core';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

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
    const { offers, guests, userId, ...eventData } = evento;

    const data = {
      ...eventData,
      password: hashedPassword,
      user: { connect: { id: userId } },
      offers: { connect: offers?.map((offer) => ({ id: offer.id })) }
    }

    return await this.prisma.event.create({ data });
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
    return await this.prisma.event.findUnique({
      where: { alias },
      include: { offers: { include: { offer: true } } },
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
