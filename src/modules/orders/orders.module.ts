import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { Order } from './entities/order.entity';
import { User } from '../users/entities/user.entity';
import { Coupon } from '../coupons/entities/coupon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Order, User, Coupon])],
    controllers: [OrdersController],
    providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
