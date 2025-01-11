import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaProvider) {}
  create(createOfferDto: CreateOfferDto) {
    return this.prisma.offer.create({ data: createOfferDto });
  }

  findAll() {
    return this.prisma.offer.findMany();
  }

  findOne(id: number) {
    return this.prisma.offer.findUnique({ where: { id } });
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return this.prisma.offer.update({ where: { id }, data: updateOfferDto });
  }

  remove(id: number) {
    return this.prisma.offer.delete({ where: { id } });
  }
}
