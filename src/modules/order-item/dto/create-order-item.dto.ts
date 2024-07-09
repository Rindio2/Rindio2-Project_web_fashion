import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderItemDto {
  @IsInt()
  order_id: number;

  @IsInt()
  product_id: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @IsPositive()
  unit_price: number;
}
