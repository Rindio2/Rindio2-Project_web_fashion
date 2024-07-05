import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

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

}

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