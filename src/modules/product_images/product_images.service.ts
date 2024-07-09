import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from './dto/create-product_image.dto';
import { UpdateProductImageDto } from './dto/update-product_image.dto';
import { ProductImagesRepository } from './product_images.repository';

@Injectable()
export class ProductImagesService {
  constructor(private readonly productImagesRepository: ProductImagesRepository) {}

  create(createProductImageDto: CreateProductImageDto) {
    return this.productImagesRepository.create(createProductImageDto);
  }

  findAll() {
    return this.productImagesRepository.findAll();
  }

  findOne(id: number) {
    return this.productImagesRepository.findOne(id);
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return this.productImagesRepository.update(id, updateProductImageDto);
  }

  remove(id: number) {
    return this.productImagesRepository.remove(id);
  }
}
