import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { Order } from '../orders/entities/order.entity';
import { Products } from '../products/entities/product.entity';

@Injectable()
export class OrderItemsRepository {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,

    @InjectRepository(Order)
    private orderRepository: Repository<Order>,

    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    const { order_id, product_id, ...orderItemData } = createOrderItemDto;
    const order = await this.orderRepository.findOne({ where: { id: order_id } });
    const product = await this.productRepository.findOne({ where: { id: product_id } });
    const orderItem = this.orderItemRepository.create({ ...orderItemData, order, product });
    return this.orderItemRepository.save(orderItem);
  }

  findAll() {
    return this.orderItemRepository.find({ relations: ['order', 'product'] });
  }

  findOne(id: number) {
    return this.orderItemRepository.findOne({ where: { order_item_id: id }, relations: ['order', 'product'] });
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    await this.orderItemRepository.update(id, updateOrderItemDto);
    return this.orderItemRepository.findOne({ where: { order_item_id: id }, relations: ['order', 'product'] });
  }

  remove(id: number) {
    return this.orderItemRepository.delete(id);
  }
}
