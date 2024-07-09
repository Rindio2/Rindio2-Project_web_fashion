// src/modules/wishlists/wishlists.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { UserRepository } from '../users/users.repository';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistRepository {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
    private userRepository: UserRepository,  // Inject UserRepository
  ) {}

  async findWishlistById(id: number) {
    return this.wishlistRepository.findOne({
      where: { wishlist_id: id },
      relations: ['items'],
    });
  }

  async findUserById(user_id: number) {
    const user = await this.userRepository.findOne({ where: { id: user_id } });
    return user;
  }

  async createWishlist(createWishlistDto: CreateWishlistDto) {
    const user = await this.userRepository.findOne({ where: { id: createWishlistDto.user_id } });
    const wishlist = this.wishlistRepository.create({ ...createWishlistDto, user });
    return this.wishlistRepository.save(wishlist);
  }

  findAll() {
    return this.wishlistRepository.find({ relations: ['items'] });
  }

  async updateWishlist(id: number, updateWishlistDto: UpdateWishlistDto) {
    await this.wishlistRepository.update(id, updateWishlistDto);
    return this.findWishlistById(id);
  }

  async removeWishlist(id: number) {
    await this.wishlistRepository.delete(id);
  }
}
