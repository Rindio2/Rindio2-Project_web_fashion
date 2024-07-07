import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository, DeepPartial } from 'typeorm';
import { Category } from '../category/entities/category.entity';


@Injectable()
export class ProductsRepository {

  constructor(
    @InjectRepository(Products)
    private productRepository: Repository<Products>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Products>,
  ){}

  async create(createProductDto: CreateProductDto) {
    const {title, description, price, productImage, categoryId} = createProductDto;
    const category = await this.categoryRepository.findOne({where: {id: categoryId}});
    // console.log(category,"category");
    
    if(!category){
        throw new NotFoundException(`Could not find`);
    }
    const newProducts = {
        ...createProductDto,
        category,
    }
    const product = await this.productRepository.create(newProducts);
    await this.productRepository.save(product);
    return product;
  }

  async findAll() {
    const products = await this.productRepository.find();
    return products;
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id, updateProductDto);
    const updatedProduct = await this.productRepository.findOne({ where: { id } });
    return updatedProduct;
  }

  async remove(id: number) {
    const product = this.productRepository.findOne({where: { id } });
    if(!product){
        throw new NotFoundException(`Could not find`);
    }
    await this.productRepository.delete(id);
    return { deleted: true };
  }
}