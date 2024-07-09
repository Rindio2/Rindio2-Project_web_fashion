// src/modules/wishlist_items/wishlist_item.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { WishlistItemService } from './wishlist_items.service';
import { CreateWishlistItemDto } from './dto/create-wishlist_item.dto';
import { UpdateWishlistItemDto } from './dto/update-wishlist_item.dto';

@Controller('wishlist-items')
export class WishlistItemController {
  constructor(private readonly wishlistItemService: WishlistItemService) {}

  @Post()
  create(@Body() createWishlistItemDto: CreateWishlistItemDto) {
    return this.wishlistItemService.create(createWishlistItemDto);
  }

  @Get()
  findAll() {
    return this.wishlistItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistItemService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWishlistItemDto: UpdateWishlistItemDto) {
    return this.wishlistItemService.update(+id, updateWishlistItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistItemService.remove(+id);
  }
}
