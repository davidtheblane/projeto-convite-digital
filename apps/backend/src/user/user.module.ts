import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaProvider } from 'src/db/prisma.provider';
import { AuthService } from '../auth/auth.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, PrismaProvider, AuthService],
})
export class UserModule {}
