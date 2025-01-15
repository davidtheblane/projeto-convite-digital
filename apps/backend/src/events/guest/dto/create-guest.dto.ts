import { IsArray, IsNotEmpty, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
import { IEventGuest } from 'core';
import { Type } from 'class-transformer';


export class CreateGuestDto {
  // @IsNumber()
  // id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @IsOptional()
  events: IEventGuest[]

  // @Type(() => Date)
  // @IsDate()
  // createAt: Date

  // @Type(() => Date)
  // @IsDate()
  // updateAt: Date
}
