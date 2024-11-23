import type { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Global, Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaProvider extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {

  onModuleInit() {
    this.$connect();
  }

  onModuleDestroy() {
    this.$disconnect();
  }
}
