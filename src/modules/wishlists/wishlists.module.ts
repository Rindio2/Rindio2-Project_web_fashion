import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistsService } from './wishlists.service';
import { WishlistsController } from './wishlists.controller';
import { Wishlist } from './entities/wishlist.entity';
import { WishlistRepository } from './wishlists.repository';
import { UsersModule } from '../users/users.module';  // Import UsersModule

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist]), UsersModule],  // Add UsersModule here
  controllers: [WishlistsController],
  providers: [WishlistsService, WishlistRepository],
})
export class WishlistsModule {}
