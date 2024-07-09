import { Category } from "src/modules/category/entities/category.entity";
import { Coupon } from "src/modules/coupons/entities/coupon.entity";
import { Order } from "src/modules/orders/entities/order.entity";
import { Products } from "src/modules/products/entities/product.entity"; // Changed Products to Product
import { User } from "src/modules/users/entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { OrderItem } from "src/modules/order-item/entities/order-item.entity";
import { Review } from "src/modules/reviews/entities/review.entity";
import { Wishlist } from "src/modules/wishlists/entities/wishlist.entity"; // Added Wishlist entity
import { WishlistItem } from "src/modules/wishlist_items/entities/wishlist_item.entity"; // Added WishlistItem entity
import { ProductImage } from "src/modules/product_images/entities/product_image.entity"; // Added ProductImage entity

require('dotenv').config();

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    User,
    Category,
    Products,
    Coupon,
    Order,
    OrderItem,
    Review,
    Wishlist,
    WishlistItem,
    ProductImage
  ],
  synchronize: true,
  logging: false, // Enable logging for more detailed error messages
};

export default config;
