import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './productos/productos.module';
import { Product } from './productos/productos.entity';
import { BrandsModule } from './brand/brand.module';
import { Brand } from './brand/brand.entity';
import { ClientsModule } from './client/client.module';
import { Client } from './client/client.entity';
import { Sale } from './sales/sales.entity';
import { SalesModule } from './sales/sales.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Auth } from './auth/entities/auth.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.development'], isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product, Brand, Client, Sale, Auth],
      synchronize: true,
    }),
    ProductsModule,
    BrandsModule,
    ClientsModule,
    SalesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
