import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistItem } from './entities/wishlist_item.entity';
import { WishlistItemRepository } from './wishlist_items.repository';
import { WishlistItemService } from './wishlist_items.service';
import { WishlistItemController } from './wishlist_items.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WishlistItem])],
  providers: [WishlistItemRepository, WishlistItemService],
  controllers: [WishlistItemController],
  exports: [WishlistItemRepository, WishlistItemService],
})
export class WishlistItemsModule {}
