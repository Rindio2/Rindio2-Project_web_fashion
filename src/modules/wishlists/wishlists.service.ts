// src/modules/wishlists/wishlists.service.ts
import { Injectable } from '@nestjs/common';
import { WishlistRepository } from './wishlists.repository';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistsService {
  constructor(private readonly wishlistRepository: WishlistRepository) {}

  create(createWishlistDto: CreateWishlistDto) {
    return this.wishlistRepository.createWishlist(createWishlistDto);
  }

  findAll() {
    return this.wishlistRepository.findAll();
  }

  findOne(id: number) {
    return this.wishlistRepository.findWishlistById(id);
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return this.wishlistRepository.updateWishlist(id, updateWishlistDto);
  }

  remove(id: number) {
    return this.wishlistRepository.removeWishlist(id);
  }
}
