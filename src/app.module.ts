import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './productos/productos.module';
import { Product } from './productos/productos.entity';
import { BrandsModule } from './brand/brand.module';
import { Brand } from './brand/brand.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "secret",
    "database": "store",
    "entities": [Product,Brand],
    "synchronize": true
  }), ProductsModule, BrandsModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
