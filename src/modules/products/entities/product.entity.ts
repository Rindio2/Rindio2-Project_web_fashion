import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    JoinColumn,
    ManyToOne,
    Timestamp,
} from "typeorm"
import { Category } from "../../category/entities/category.entity"

@Entity()
export class Products{
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


    @ManyToOne((type) => Category, (category) => category.products, {
        cascade: true, onDelete: 'CASCADE'
      })
    @JoinColumn({ name: 'category_id' })
        category: Category;
}