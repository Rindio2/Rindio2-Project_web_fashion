import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('coupons')
export class Coupon {
    @PrimaryGeneratedColumn({ name: 'coupon_id' })
    id: number;

    @Column({ type: 'varchar', length: 50 })
    code: string;

    @Column({ name: 'discount_percentage', type: 'decimal', precision: 5, scale: 2 })
    discountPercentage: number;

    @Column({ name: 'expiration_date', type: 'date' })
    expirationDate: Date;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
    orders: any;
}
