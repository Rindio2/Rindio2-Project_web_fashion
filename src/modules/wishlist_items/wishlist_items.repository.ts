import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WishlistItem } from './entities/wishlist_item.entity';
import { CreateWishlistItemDto } from './dto/create-wishlist_item.dto';
import { UpdateWishlistItemDto } from './dto/update-wishlist_item.dto';

@Injectable()
export class WishlistItemRepository {
  constructor(
    @InjectRepository(WishlistItem)
    private wishlistItemRepository: Repository<WishlistItem>,
  ) {}

  async create(createWishlistItemDto: CreateWishlistItemDto) {
    const wishlistItem = this.wishlistItemRepository.create(createWishlistItemDto);
    return this.wishlistItemRepository.save(wishlistItem);
  }

  findAll() {
    return this.wishlistItemRepository.find({ relations: ['wishlist', 'product'] });
  }

  findOne(id: number) {
    return this.wishlistItemRepository.findOne({ where: { wishlist_item_id: id }, relations: ['wishlist', 'product'] });
  }

  async update(id: number, updateWishlistItemDto: UpdateWishlistItemDto) {
    await this.wishlistItemRepository.update(id, updateWishlistItemDto);
    return this.wishlistItemRepository.findOne({ where: { wishlist_item_id: id }, relations: ['wishlist', 'product'] });
  }

  remove(id: number) {
    return this.wishlistItemRepository.delete(id);
  }

  async findWishlistItems(wishlistId: number) {
    return this.wishlistItemRepository.find({ where: { wishlist_id: wishlistId }, relations: ['product'] });
  }
}
