import { Injectable } from '@nestjs/common';
import { ReviewRepository } from './reviews.repository';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  create(createReviewDto: CreateReviewDto) {
    return this.reviewRepository.create(createReviewDto);
  }

  findAll() {
    return this.reviewRepository.findAll();
  }

  findOne(id: number) {
    return this.reviewRepository.findOne(id);
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.reviewRepository.update(id, updateReviewDto);
  }

  remove(id: number) {
    return this.reviewRepository.remove(id);
  }
}

