import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/healthcheck')
  healthcheck(): string {
    return 'Service is up and running';
  }
}
