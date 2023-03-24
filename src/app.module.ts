import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './productos/productos.module';
import { Product } from './productos/productos.entity';
import { BrandsModule } from './brand/brand.module';
import { Brand } from './brand/brand.entity';
import { SalesService } from './sales/sales.service';
import { SalesController } from './sales/sales.controller';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';
import { ClientsModule } from './client/client.module';

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
  }), ProductsModule, BrandsModule,ClientsModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
