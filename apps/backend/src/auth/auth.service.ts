import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaProvider,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    console.log({user})

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    // TODO: REMOVE COMMENT FOR PRODUCTION
    // TODO: implementar bcrypt ao criar usuário.
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const payload = { userId: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
