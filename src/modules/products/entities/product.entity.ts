import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    JoinColumn,
    ManyToOne,
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

    @ManyToOne((type) => Category, (category) => category.products, {
        cascade: true, onDelete: 'CASCADE'
      })
    @JoinColumn({ name: 'category_id' })
        category: Category;
}