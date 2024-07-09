import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    JoinColumn,
    ManyToOne,
    OneToMany,
    Timestamp,
  } from "typeorm";
  import { Category } from "../../category/entities/category.entity";
  import { ProductImage } from "../../product_images/entities/product_image.entity";
  
  @Entity()
  export class Products {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column()
    price: number;
  
    @Column()
    productImage: string;
  
    @Column()
    stock_quantity: number;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
  
    @ManyToOne(() => Category, (category) => category.products, {
      cascade: true,
      onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'category_id' })
    category: Category;
  
    @OneToMany(() => ProductImage, (productImage) => productImage.product)
    images: ProductImage[];
  
    orderItems: any;
    reviews: any;
    wishlistItems: any;
  }
  