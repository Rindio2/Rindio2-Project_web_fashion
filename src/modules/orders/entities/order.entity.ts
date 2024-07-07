import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Coupon } from '../../coupons/entities/coupon.entity';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn({ name: 'order_id' })
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'order_date', type: 'timestamp' })
    orderDate: Date;

    @Column({ type: 'varchar', length: 20 })
    status: string;

    @Column({ name: 'total_amount', type: 'decimal', precision: 10, scale: 2 })
    totalAmount: number;

    @Column({ name: 'shipping_address', type: 'text' })
    shippingAddress: string;

    @Column({ name: 'payment_method', type: 'varchar', length: 50 })
    paymentMethod: string;

    @ManyToOne(() => Coupon)
    @JoinColumn({ name: 'coupon_id' })
    coupon: Coupon;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
}
