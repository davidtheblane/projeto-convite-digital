import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Controller,
  HttpException,
} from '@nestjs/common';
import { CurrentUser } from 'src/user/user.decorator';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsService } from './events.service';
import {
  Data,
  IEvent,
  complementarEvento,
} from "core";

@Controller('events')
export class EventsController {
  constructor(
    private readonly eventsService: EventsService,
  ) { }

  // @Post()
  // async create(
  //   @Body() createEventDto: CreateEventDto,
  //   @CurrentUser() user: { userId: number },
  // ) {
  //   console.log('create-event')
  //   return await this.eventsService.create(createEventDto, user.userId);
  // }

  @Get()
  async findAll() {
    const eventos = await this.eventsService.findAll();
    return eventos.map((evento) => evento);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.eventsService.findOne(+id);
  }

  @Get('alias/:idOuAlias')
  async searchEvent(@Param('idOuAlias') idOuAlias: string) {

    return await this.eventsService.findByAlias(idOuAlias);
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
  //   return this.eventsService.update(+id, updateEventDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.eventsService.remove(+id);
  // }

  @Post()
  async createEvent(@Body() evento: CreateEventDto) {
    const eventoJaExiste = await this.eventsService.findByAlias(evento.alias);
    if (eventoJaExiste) throw new HttpException('Já existe um evento com esse alias.', 400);

    const eventoCompleto = complementarEvento(evento);
    console.log({ eventoCompleto })
    await this.eventsService.create(eventoCompleto);
    return eventoCompleto;
  }

  @Get('validate/:alias')
  async validateAlias(@Param('alias') alias: string) {
    console.log('validar-alias', alias);
    const evento = await this.eventsService.findByAlias(alias)
    return { valido: !evento }
  }



  @Post('acessar')
  async loadEvent(@Body() dados: { id: number; senha: string }) {
    const { id, senha } = dados;
    console.log('acessar-evento', id, senha)
    const evento = await this.eventsService.findOne(+id);

    if (!evento) throw new HttpException('Evento não encontrado.', 400);
    if (evento.password !== senha) throw new HttpException('Senha não corresponde ao evento.', 400);
    return evento;
  }

  // private serializar(evento: CreateEventDto) {
  //   if (!evento) return null;
  //   return {
  //     ...evento,
  //     startDate: Data.formatar(evento.startDate),
  //   };
  // }

  // private deserializar(evento: any): IEvent {
  //   if (!evento) return null;
  //   return {
  //     ...evento,
  //     startDate: Data.desformatar(evento.startDate),
  //   } as IEvent;
  // }
}
