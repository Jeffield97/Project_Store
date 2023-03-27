import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private clientsService: ClientService) { }
    @Get()
    findAll() {
        return this.clientsService.findAll();
    }
    @Get(':clientId')
    findClient(@Param('clientId') clientId: string) { return this.clientsService.findClient(clientId) }

    @Post()
    createClient(@Body() body) {
        let newClient: any = body;
        return this.clientsService.createClient(newClient)
    }

    @Delete(':clientId')
    deleteClient(@Param('clientId') clientId: string) {
        return this.clientsService.deleteClient(clientId)
    }
}
