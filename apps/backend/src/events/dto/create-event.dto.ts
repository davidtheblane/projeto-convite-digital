import { IEventGuest, IEventOffer } from 'core';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateEventDto {

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
  @IsOptional()
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
  expectedAudience: number;

  @Type(() => Date) // Converts input to a Date object
  @IsDate() // Validates that the input is a Date
  @IsNotEmpty()
  startDate: Date;

  @Type(() => Date) // Converts input to a Date object
  @IsDate() // Validates that the input is a Date
  @IsOptional()
  endDate?: Date;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsOptional()
  @IsArray()
  guests?: IEventGuest[]

  @IsOptional()
  @IsArray()
  offers?: IEventOffer[]

}
