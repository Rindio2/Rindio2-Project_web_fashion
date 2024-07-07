import { Category } from "src/modules/category/entities/category.entity";
import { Coupon } from "src/modules/coupons/entities/coupon.entity";
import { Order } from "src/modules/orders/entities/order.entity";
import { Products } from "src/modules/products/entities/product.entity";
import { User } from "src/modules/users/entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

require('dotenv').config();


const config:MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Category, Products, Coupon, Order],
    synchronize: true,
}

export default config;

