import { Body, Controller, Get, Post, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { SalesService } from './sales.service';

@Controller('sale')
export class SalesController {
    constructor(private saleService: SalesService) { }
    // @Get()
    // getSales() {
    //     return this.saleService.findAll();
    // }
    @Post()
    createSale(@Body() body) {
        let newSale = body
        return this.saleService.createSale(newSale)
    }
    @Get(':date')
    findByDate(@Param('productId') productId: string) {
        return this.saleService.findByDate('1')
    }
    @Get('/byClient/:idClient')
    findByClient(@Param('idClient') clientId:string)
    {
        return this.saleService.findSalesByClientId(clientId)
    }

    @Get()
    test(@Req() request:Request)
    {
        return this.saleService.test(request.query)
    }
}
