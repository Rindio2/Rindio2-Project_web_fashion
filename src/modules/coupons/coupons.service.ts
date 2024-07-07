import { Injectable } from '@nestjs/common';
import { CouponsRepository } from './coupons.repository';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponsService {
    constructor(private readonly couponsRepository: CouponsRepository) {}

    create(createCouponDto: CreateCouponDto) {
        return this.couponsRepository.create(createCouponDto);
    }

    findAll() {
        return this.couponsRepository.findAll();
    }

    findOne(id: number) {
        return this.couponsRepository.findOne(id);
    }

    update(id: number, updateCouponDto: UpdateCouponDto) {
        return this.couponsRepository.update(id, updateCouponDto);
    }

    remove(id: number) {
        return this.couponsRepository.remove(id);
    }
}

