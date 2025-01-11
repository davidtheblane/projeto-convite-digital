import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaProvider } from 'src/db/prisma.provider';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(readonly prisma: PrismaProvider) {}

  async create(createUserDto: CreateUserDto) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );

    return this.prisma.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
