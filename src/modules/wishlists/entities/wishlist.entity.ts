import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { WishlistItem } from '../../wishlist_items/entities/wishlist_item.entity';

@Entity('wishlists')
export class Wishlist {
  @PrimaryGeneratedColumn()
  wishlist_id: number;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.wishlists)
  user: User;

  @OneToMany(() => WishlistItem, wishlistItem => wishlistItem.wishlist)
  wishlistItems: WishlistItem[];
}
