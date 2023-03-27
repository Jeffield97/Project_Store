import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sale')
export class SalesController {
    constructor(private saleService: SalesService) { }
    @Get()
    getSales() {
        return this.saleService.findAll();
    }
    @Post()
    createSale(@Body() body) {
        let newSale = body
        return this.saleService.createSale(newSale)
    }
    @Get(':date')
    findByDate(@Param('productId') productId: string) {
        return this.saleService.findByDate('1')
    }
}
