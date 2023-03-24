import { Controller, Get, Injectable } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private clientsService: ClientService) { }
    @Get()
    findAll() {
        return this.clientsService.findAll();
    }
}
