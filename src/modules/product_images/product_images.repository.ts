import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductImage } from './entities/product_image.entity';
import { CreateProductImageDto } from './dto/create-product_image.dto';
import { UpdateProductImageDto } from './dto/update-product_image.dto';

@Injectable()
export class ProductImagesRepository {
  constructor(
    @InjectRepository(ProductImage)
    private productImagesRepository: Repository<ProductImage>,
  ) {}

  async create(createProductImageDto: CreateProductImageDto) {
    const productImage = this.productImagesRepository.create(createProductImageDto);
    return this.productImagesRepository.save(productImage);
  }

  findAll() {
    return this.productImagesRepository.find({ relations: ['product'] });
  }

  findOne(id: number) {
    return this.productImagesRepository.findOne({ where: { image_id: id }, relations: ['product'] });
  }

  async update(id: number, updateProductImageDto: UpdateProductImageDto) {
    await this.productImagesRepository.update(id, { ...updateProductImageDto });
    return this.productImagesRepository.findOne({ where: { image_id: id }, relations: ['product'] });
  }

  remove(id: number) {
    return this.productImagesRepository.delete(id);
  }
}
