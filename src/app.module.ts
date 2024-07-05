import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module'; // Sửa lại tên thư mục từ 'users' thành 'user' để đồng nhất với tên module
import { ProductsModule } from './modules/products/products.module'; // Tên thư mục nên là 'product' thay vì 'products' để đồng nhất với tên module
import { CategoryModule } from './modules/category/category.module';
import { AuthModule } from './modules/auth/auth.module';
import config from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    ProductsModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
