import { Injectable } from '@nestjs/common';
import { OrderItemsRepository } from './order-item.repository';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemsService {
  constructor(private readonly orderItemsRepository: OrderItemsRepository) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsRepository.create(createOrderItemDto);
  }

  findAll() {
    return this.orderItemsRepository.findAll();
  }

  findOne(id: number) {
    return this.orderItemsRepository.findOne(id);
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemsRepository.update(id, updateOrderItemDto);
  }

  remove(id: number) {
    return this.orderItemsRepository.remove(id);
  }
}
