import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaProvider } from 'src/db/prisma.provider';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { GuestController } from './guest/guest.controller';
import { GuestService } from './guest/guest.service';
import { OfferController } from './offer/offer.controller';
import { OfferService } from './offer/offer.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [EventsController, GuestController, OfferController],
  providers: [EventsService, GuestService, OfferService, PrismaProvider],
})
export class EventsModule {}
