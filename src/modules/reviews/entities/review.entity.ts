import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Products } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';
import { WishlistItem } from 'src/modules/wishlist_items/entities/wishlist_item.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  review_id: number;

  @Column()
  rating: number;

  @Column('text')
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Products, product => product.reviews)
  product: Products;

  @ManyToOne(() => User, user => user.reviews)
  user: User;
  @OneToMany(() => WishlistItem, wishlistItem => wishlistItem.product)
  wishlistItems: WishlistItem[];
}
