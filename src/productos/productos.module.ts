import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductosController } from "./productos.controller";
import { Product } from "./productos.entity";
import { ProductosService } from "./productos.service";
@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductosService],
    controllers: [ProductosController],
})
export class ProductsModule { }