import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { IEventGuest } from 'core';

export class CreateGuestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsArray()
  events: IEventGuest[]
}
