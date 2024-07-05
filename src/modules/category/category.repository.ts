import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(category);
    return category;
  }

  async findAll() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.update(id, updateCategoryDto);
    const updatedCategory = await this.categoryRepository.findOne({ where: { id } });
    return updatedCategory;
  }

  async remove(id: number) {
    await this.categoryRepository.delete(id);
    return { deleted: true };
  }
}
