import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientDto } from './client.dto';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
   constructor(@InjectRepository(Client) private clientsRepository: Repository<Client>) { }
   async findAll(): Promise<Client[]> {
      return this.clientsRepository.find()
   }
   async findClient(clientId: string): Promise<Client> {
      return this.clientsRepository.findOne({ where: { id: clientId } })
   }

   async createClient(newClient: ClientDto): Promise<Client> {
      return this.clientsRepository.save(newClient);
   }

   async deleteClient(clientId: string): Promise<any> {
      return this.clientsRepository.delete(clientId)
   }
}
