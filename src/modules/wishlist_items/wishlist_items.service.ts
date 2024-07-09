import { Injectable } from '@nestjs/common';
import { WishlistItemRepository } from './wishlist_items.repository';
import { CreateWishlistItemDto } from './dto/create-wishlist_item.dto';
import { UpdateWishlistItemDto } from './dto/update-wishlist_item.dto';

@Injectable()
export class WishlistItemService {
  constructor(private readonly wishlistItemRepository: WishlistItemRepository) {}

  create(createWishlistItemDto: CreateWishlistItemDto) {
    return this.wishlistItemRepository.create(createWishlistItemDto);
  }

  findAll() {
    return this.wishlistItemRepository.findAll();
  }

  findOne(id: number) {
    return this.wishlistItemRepository.findOne(id);
  }

  update(id: number, updateWishlistItemDto: UpdateWishlistItemDto) {
    return this.wishlistItemRepository.update(id, updateWishlistItemDto);
  }

  remove(id: number) {
    return this.wishlistItemRepository.remove(id);
  }

  findWishlistItems(wishlistId: number) {
    return this.wishlistItemRepository.findWishlistItems(wishlistId);
  }
}
