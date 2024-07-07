import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponsRepository {
    constructor(
        @InjectRepository(Coupon)
        private couponRepository: Repository<Coupon>,
    ) {}

    create(createCouponDto: CreateCouponDto) {
        const coupon = this.couponRepository.create(createCouponDto);
        return this.couponRepository.save(coupon);
    }

    findAll() {
        return this.couponRepository.find();
    }

    findOne(id: number) {
        return this.couponRepository.findOneBy({ id });
    }

    async update(id: number, updateCouponDto: UpdateCouponDto) {
        await this.couponRepository.update(id, updateCouponDto);
        return this.couponRepository.findOneBy({ id });
    }

    remove(id: number) {
        return this.couponRepository.delete(id);
    }
}
