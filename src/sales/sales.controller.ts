import { Body, Controller, Get, Post, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { SaleDto } from './sales.dto';
import { SalesService } from './sales.service';

@Controller('sale')
export class SalesController {
    constructor(private saleService: SalesService) { }
    @Get()
    test(@Req() request:Request)
    {
        return this.saleService.findAll(request.query)
    }
    
    @Get('/byClient/:idClient')
    findByClient(@Param('idClient') clientId:string)
    {
        return this.saleService.findSalesByClientId(clientId)
    }
    
    @Post()
    createSale(@Body() newSale: SaleDto) {
        return this.saleService.createSale(newSale)
    }
    
}
