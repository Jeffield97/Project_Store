import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
    constructor(private brandService: BrandService) { }
    @Get()
    findAll() {
        return this.brandService.findAll();
    }
    @Get(':brandId')
    findProduct(@Param('brandId') brandId: string) {
        return this.brandService.findBrand(parseInt(brandId));
    }
    @Post()
    createBrand(@Body() body) {
        let newProduct: any = body;
        return this.brandService.createBrand(newProduct)
    }
    @Delete(':brandId')
    deleteBrand(@Param('brandId') brandId: string) {
        return this.brandService.deleteBrand(parseInt(brandId));
    }

    @Put(':brandId')
    updateBrand(@Param('brandId') brandId: string, @Body() body) {
        let newBrand: any = body
        return this.brandService.updateBrand(parseInt(brandId), newBrand)
    }
}
