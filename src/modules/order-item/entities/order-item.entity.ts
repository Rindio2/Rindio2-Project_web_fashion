import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Order } from '../../orders/entities/order.entity';
  import { Products } from '../../products/entities/product.entity';
  
  @Entity()
  export class OrderItem {
    @PrimaryGeneratedColumn()
    order_item_id: number;
  
    @ManyToOne(() => Order, order => order.orderItems)
    @JoinColumn({ name: 'order_id' })
    order: Order;
  
    @ManyToOne(() => Products, product => product.orderItems)
    @JoinColumn({ name: 'product_id' })
    product: Products;
  
    @Column()
    quantity: number;
  
    @Column('decimal', { precision: 10, scale: 2 })
    unit_price: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  