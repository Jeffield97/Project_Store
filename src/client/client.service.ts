import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
   constructor(@InjectRepository(Client) private clientsRepository: Repository<Client>){}
   async findAll():Promise<any>{
    return 'Recibid clientes...'
   }
}
