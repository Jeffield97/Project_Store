import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClientDto } from './client.dto';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private clientsService: ClientService) { }
    @Get()
    findAll() {
        return this.clientsService.findAll();
    }
    @Get(':clientId')
    findClient(@Param('clientId') clientId: string) {
        return this.clientsService.findClient(clientId)
    }

    @Post()
    createClient(@Body() newClient: ClientDto) {
        return this.clientsService.createClient(newClient)
    }

    @Delete(':clientId')
    deleteClient(@Param('clientId') clientId: string) {
        return this.clientsService.deleteClient(clientId)
    }
}
