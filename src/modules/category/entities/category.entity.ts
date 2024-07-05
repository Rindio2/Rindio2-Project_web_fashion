import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
  } from "typeorm";
  import { Products } from "../../products/entities/product.entity";
  
  @Entity()
  export class Category {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @OneToMany(() => Products, product => product.category)
    products: Products[];
  }
  