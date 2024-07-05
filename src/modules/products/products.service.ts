import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {

  constructor(
    private readonly productRepository: ProductsRepository
  ){}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async findAll() {
    const products = await this.productRepository.findAll();
    return {
      message: "Get all products successfully",
      data: products,
      status : 200
    };
  }

  findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepository.remove(id);
  }
}
