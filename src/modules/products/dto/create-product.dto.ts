import { IsNotEmpty, IsNumber, IsString, IsTimeZone, IsUrl } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsUrl()
    @IsNotEmpty()
    productImage: string;

    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @IsNumber()
    @IsNotEmpty()
    stock_quantity: number;

}


// @Column()
    // stock_quantity: number;

    // @Column()
    // image_url: string;

    // @Column()
    // created_at : Timestamp;


// @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     title: string;

//     @Column()
//     description: string;

//     @Column()
//     price: number;

//     @Column()
//     productImage: string;

//     @ManyToOne((type) => Category, (category) => category.products, {
//         cascade: true,
//     })
//     @JoinColumn({name: "category_id",})
//     category: Category[]