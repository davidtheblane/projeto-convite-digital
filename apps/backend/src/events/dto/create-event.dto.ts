import { IEventGuest, IEventOffer } from 'core';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsObject,
} from 'class-validator';

export class CreateEventDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  alias: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  local: string;

  @IsString()
  address?: string;

  @IsBoolean()
  monetize?: boolean;

  @IsString()
  keyPix?: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  imageBackground: string;

  @IsNumber()
  expectedAudience?: number;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  endDate?: Date;

  @IsObject()
  @IsNotEmpty()
  user: object;

  @IsNumber()
  @IsNotEmpty()
  userId: number;


  @IsOptional()
  @IsArray()
  guests?: IEventGuest[]

  @IsOptional()
  @IsArray()
  offers?: IEventOffer[]

  // //Antes
  // @IsOptional()
  // @IsArray()
  // offers?: number[]
}
