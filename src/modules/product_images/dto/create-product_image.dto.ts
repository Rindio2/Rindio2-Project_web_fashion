import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsString()
  image_url: string;

  @IsNotEmpty()
  @IsInt()
  product_id: number;
}
