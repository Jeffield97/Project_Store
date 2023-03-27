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

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "secret",
    "database": "store",
    "entities": [Product, Brand, Client, Sale],
    "synchronize": true
  }), ProductsModule, BrandsModule, ClientsModule, SalesModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
