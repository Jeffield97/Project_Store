import { Injectable } from '@nestjs/common';
import { Brand } from './brand.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BrandDto } from './brand.dto';

@Injectable()
export class BrandService {
    constructor(@InjectRepository(Brand) private brandRepository: Repository<Brand>) { }
    async findAll(): Promise<Brand[]> {
        return await this.brandRepository.find()
    }
    async findBrand(brandId: number): Promise<Brand> {
        return this.brandRepository.findOne({where:{id:brandId}})
    }
    async createBrand(newProduct:BrandDto): Promise<Brand> {
        return this.brandRepository.save(newProduct)
    }
    async deleteBrand(brandId: number): Promise<any> {
        return await this.brandRepository.delete({ id:brandId})
    }

    async updateBrand(brandId: number, newBrand: BrandDto) {
        let toUpdate = await this. brandRepository.findOne({ where: { id: brandId} })
        let updated = Object.assign(toUpdate, newBrand);
        return this.brandRepository.save(updated)
    }
}
