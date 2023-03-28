import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { SaleDto } from './sales.dto';
import { Sale } from './sales.entity';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sale) private salesRepository: Repository<Sale>) { }

    async findAll(params): Promise<Sale[]> {
        if (params.ci && params.idventa) {
            console.log(params.ci)
            return this.salesRepository.find({ where: { id: params.idventa, idCliente: { ci: params.ci } }, relations: { idProducto: true } })
        }
        else {
            return this.salesRepository.find()
        }
    }
    async createSale(newSale:SaleDto): Promise<Sale> {
        return this.salesRepository.save(newSale)
    }

    async findSalesByClientId(ciCliente): Promise<Sale[]> {
        return this.salesRepository.find({ where: { idCliente: { ci: ciCliente } } })
    }
}

