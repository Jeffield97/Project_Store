import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './productos/productos.service';
import { ProductosController } from './productos/productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './productos/productos.modules';
import { Product } from './productos/productos.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "secret",
    "database": "store",
    "entities": [Product],
    "synchronize": true
  }), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
