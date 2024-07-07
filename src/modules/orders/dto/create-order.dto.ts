// create-order.dto.ts
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsDate, IsDecimal } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsDate()
    orderDate: Date;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsDecimal()
    totalAmount: number;

    @IsNotEmpty()
    @IsString()
    shippingAddress: string;

    @IsNotEmpty()
    @IsString()
    paymentMethod: string;

    @IsOptional()
    @IsNumber()
    couponId?: number;
}
