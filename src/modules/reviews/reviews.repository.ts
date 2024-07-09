import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Products } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ReviewRepository {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,

    @InjectRepository(Products)
    private productRepository: Repository<Products>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const { product_id, user_id, ...reviewData } = createReviewDto;
    const product = await this.productRepository.findOne({ where: { id: product_id } });
    const user = await this.userRepository.findOne({ where: { id: user_id } });
    const review = this.reviewRepository.create({ ...reviewData, product, user });
    return this.reviewRepository.save(review);
  }

  findAll() {
    return this.reviewRepository.find({ relations: ['product', 'user'] });
  }

  findOne(id: number) {
    return this.reviewRepository.findOne({ where: { review_id: id }, relations: ['product', 'user'] });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    await this.reviewRepository.update(id, updateReviewDto);
    return this.reviewRepository.findOne({ where: { review_id: id }, relations: ['product', 'user'] });
  }

  remove(id: number) {
    return this.reviewRepository.delete(id);
  }
}
