import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}
