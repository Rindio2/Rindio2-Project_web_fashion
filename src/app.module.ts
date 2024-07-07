import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module'; // Sửa lại tên thư mục từ 'users' thành 'user' để đồng nhất với tên module
import { ProductsModule } from './modules/products/products.module'; // Tên thư mục nên là 'product' thay vì 'products' để đồng nhất với tên module
import { CategoryModule } from './modules/category/category.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CouponsModule } from './modules/coupons/coupons.module';
import { OrderItemModule } from './modules/order-item/order-item.module';
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
    OrderItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
