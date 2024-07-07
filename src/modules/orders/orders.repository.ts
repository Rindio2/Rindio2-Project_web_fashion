import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from '../users/entities/user.entity';
import { Coupon } from '../coupons/entities/coupon.entity';

@Injectable()
export class OrdersRepository {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,

        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Coupon)
        private couponRepository: Repository<Coupon>,
    ) {}

    async create(createOrderDto: CreateOrderDto) {
        const { userId, couponId, ...orderData } = createOrderDto;
        const user = await this.userRepository.findOneBy({ id: userId });
        const coupon = couponId ? await this.couponRepository.findOneBy({ id: couponId }) : null;
        const order = this.orderRepository.create({ ...orderData, user, coupon });
        return this.orderRepository.save(order);
    }

    findAll() {
        return this.orderRepository.find({ relations: ['user', 'coupon'] });
    }

    findOne(id: number) {
        return this.orderRepository.findOneBy({ id });
    }

    async update(id: number, updateOrderDto: UpdateOrderDto) {
        await this.orderRepository.update(id, updateOrderDto);
        return this.orderRepository.findOneBy({ id });
    }

    remove(id: number) {
        return this.orderRepository.delete(id);
    }
}
