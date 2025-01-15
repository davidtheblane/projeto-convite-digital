import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { GuestService } from './guest.service';
import { EventsService } from '../events.service';

@Controller('guests')
export class GuestController {
  constructor(
    private readonly guestServices: GuestService,
    private readonly eventsServices: EventsService,
  ) { }

  @Post()
  async create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestServices.create(createGuestDto);
  }

  @Get()
  findAll() {
    return this.guestServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestServices.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuestDto: UpdateGuestDto) {
    return this.guestServices.update(+id, updateGuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestServices.remove(+id);
  }

  @Post(':alias/guest')
  async saveGuest(@Param('alias') alias: string, @Body() convidado: CreateGuestDto) {

    console.log('adicionar-candidato', alias, convidado)

    const candidateEventUpdated = this.guestServices.saveGuest(alias, convidado);

    return candidateEventUpdated

  }
}
