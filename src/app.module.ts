import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { Users } from './users/entities/user.entity';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: String(process.env.DB_USERNAME),
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Users, Category, Product],
      synchronize: true,
      dropSchema: false,
      logging: true,
    }),
    UsersModule,
    CategoryModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
