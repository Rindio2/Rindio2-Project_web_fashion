import { Entity, Column, PrimaryGeneratedColumn, Timestamp, OneToMany } from 'typeorm';
import { Wishlist } from '../../wishlists/entities/wishlist.entity';
@Entity()
export class User {
    [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  number_phone: string;

  @Column()
  address: string;

  @Column()
  role: number;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;
  orders: any;
  reviews: any;

  @OneToMany(() => Wishlist, wishlist => wishlist.user)
  wishlists: Wishlist[];
}