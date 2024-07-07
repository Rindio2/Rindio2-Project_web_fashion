import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { ProductsRepository } from './products.repository';
import { Category } from '../category/entities/category.entity'; // Import Category entity
import { CategoryModule } from '../category/category.module'; // Import CategoryModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Products, Category]), // Include both Products and Category entities
    CategoryModule // Import CategoryModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}