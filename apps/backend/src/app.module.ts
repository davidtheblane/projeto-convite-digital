import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
// import { EventosModule } from './eventos/eventos.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DbModule, EventsModule, UserModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
