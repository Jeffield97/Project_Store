import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoDto } from './productos.dto';
import { ProductosService } from "./productos.service";

@Controller('products')
export class ProductosController {
    constructor(private productService: ProductosService) { }
    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':productId')
    findProduct(@Param('productId') productId: string) {
        return this.productService.findProduct(productId);
    }

    @Get('/brand/:brandId')
    findProductByBrand(@Param('brandId') brandId:string)
    {
        return this.productService.getProductsByBrand(brandId)
    }
    @Post()
    createProduct(@Body() newProduct:ProductoDto) {
        return this.productService.createProduct(newProduct)
    }
    @Delete(':productId')
    deleteProduct(@Param('productId') productId: string) {
        return this.productService.deleteProduct(productId);
    }

    @Put(':productId')
    updateProduct(@Param('productId') productId: string, @Body() newProduct:ProductoDto) {
        return this.productService.updateProduct(productId, newProduct)
    }

}
