import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Wishlist } from '../../wishlists/entities/wishlist.entity';
import { Products } from '../../products/entities/product.entity'; // Assuming there is a Product entity

@Entity('wishlist_items')
export class WishlistItem {
  @PrimaryGeneratedColumn()
  wishlist_item_id: number;

  @Column()
  wishlist_id: number;

  @Column()
  product_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Wishlist, wishlist => wishlist.wishlistItems)
  wishlist: Wishlist;

  @ManyToOne(() => Products, product => product.wishlistItems)
  product: Products;

  @OneToMany(() => WishlistItem, wishlistItem => wishlistItem.wishlist)
  wishlistItems: WishlistItem[];
}
