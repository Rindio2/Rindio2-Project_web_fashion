import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponsService } from './coupons.service';
import { CouponsController } from './coupons.controller';
import { CouponsRepository } from './coupons.repository';
import { Coupon } from './entities/coupon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Coupon])],
    controllers: [CouponsController],
    providers: [CouponsService, CouponsRepository],
})
export class CouponsModule {}