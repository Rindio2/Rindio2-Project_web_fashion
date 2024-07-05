import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {

  constructor(
    private readonly categoryRepository: CategoryRepository
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.create(createCategoryDto);
    return {
      message: "Category created successfully",
      data: newCategory,
      status: 201
    };
  }

  async findAll() {
    const categories = await this.categoryRepository.findAll();
    return {
      message: "Get all categories successfully",
      data: categories,
      status: 200
    };
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne(id);
    if (!category) {
      return {
        message: `Category with ID ${id} not found`,
        status: 404
      };
    }
    return {
      message: "Category found successfully",
      data: category,
      status: 200
    };
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updatedCategory = await this.categoryRepository.update(id, updateCategoryDto);
    if (!updatedCategory) {
      return {
        message: `Category with ID ${id} not found`,
        status: 404
      };
    }
    return {
      message: "Category updated successfully",
      data: updatedCategory,
      status: 200
    };
  }

  async remove(id: number) {
    await this.categoryRepository.remove(id);
    return {
      message: "Category removed successfully",
      status: 200
    };
  }
}
