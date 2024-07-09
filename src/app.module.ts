import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoryModule } from './modules/category/category.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CouponsModule } from './modules/coupons/coupons.module';
import { OrderItemsModule } from './modules/order-item/order-item.module';
import { ReviewModule } from './modules/reviews/reviews.module';
import { WishlistsModule } from './modules/wishlists/wishlists.module';
import { WishlistItemsModule } from './modules/wishlist_items/wishlist_items.module';
import { ProductImagesModule } from './modules/product_images/product_images.module';
import config from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    ProductsModule,
    CategoryModule,
    AuthModule,
    AdminModule,
    OrdersModule,
    CouponsModule,
    OrderItemsModule,
    ReviewModule,
    WishlistItemsModule,
    WishlistsModule,
    ProductImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
