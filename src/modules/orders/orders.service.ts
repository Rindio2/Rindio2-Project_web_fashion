import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
    constructor(private readonly ordersRepository: OrdersRepository) {}

    create(createOrderDto: CreateOrderDto) {
        return this.ordersRepository.create(createOrderDto);
    }

    findAll() {
        return this.ordersRepository.findAll();
    }

    findOne(id: number) {
        return this.ordersRepository.findOne(id);
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return this.ordersRepository.update(id, updateOrderDto);
    }

    remove(id: number) {
        return this.ordersRepository.remove(id);
    }
}
