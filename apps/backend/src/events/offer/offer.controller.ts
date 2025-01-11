import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { OfferService } from './offer.service';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerServices: OfferService) {}

  @Post()
  async create(@Body() createOfferDto: CreateOfferDto) {
    return this.offerServices.create(createOfferDto);
  }

  @Get()
  findAll() {
    return this.offerServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerServices.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offerServices.update(+id, updateOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerServices.remove(+id);
  }
}
