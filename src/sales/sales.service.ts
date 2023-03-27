import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, createConnection } from 'typeorm';
import { Sale } from './sales.entity';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sale) private salesRepository: Repository<Sale>) { }

    async findAll(): Promise<Sale[]> {
        return this.salesRepository.find()
    }
    async createSale(newSale): Promise<Sale> {
        return this.salesRepository.save(newSale)
    }
    async findByDate(date): Promise<Sale> {
        let res=null
        createConnection().then(async conn => {
            const saleRepo = await conn.getRepository(Sale);
            const saleFirst = await saleRepo.createQueryBuilder('sale').where('sale.id=:id', { id: 1 }).getOne();
            res = saleFirst
        })
        return res
    }
}

