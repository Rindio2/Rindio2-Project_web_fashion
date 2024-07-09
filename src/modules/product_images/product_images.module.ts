import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImagesService } from './product_images.service';
import { ProductImagesController } from './product_images.controller';
import { ProductImagesRepository } from './product_images.repository';
import { ProductImage } from './entities/product_image.entity';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImage]), ProductsModule],
  controllers: [ProductImagesController],
  providers: [ProductImagesService, ProductImagesRepository],
  exports: [ProductImagesRepository],
})
export class ProductImagesModule {}
