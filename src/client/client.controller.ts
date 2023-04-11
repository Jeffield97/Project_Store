import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClientDto } from './client.dto';
import { ClientService } from './client.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('client')
export class ClientController {
  constructor(private clientsService: ClientService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }
  @Get(':clientId')
  findClient(@Param('clientId') clientId: string) {
    return this.clientsService.findClient(clientId);
  }

  @Post()
  createClient(@Body() newClient: ClientDto) {
    return this.clientsService.createClient(newClient);
  }

  @Delete(':clientId')
  deleteClient(@Param('clientId') clientId: string) {
    return this.clientsService.deleteClient(clientId);
  }
}
