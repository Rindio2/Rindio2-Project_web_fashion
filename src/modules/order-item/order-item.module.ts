import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemsService } from './order-item.service';
import { OrderItemsController } from './order-item.controller';
import { OrderItemsRepository } from './order-item.repository';
import { OrderItem } from './entities/order-item.entity';
import { Order } from '../orders/entities/order.entity';
import { Products } from '../products/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem, Order, Products])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService, OrderItemsRepository],
})
export class OrderItemsModule {}
