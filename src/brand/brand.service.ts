import { Injectable } from '@nestjs/common';
import { Brand } from './brand.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class BrandService {
    constructor(@InjectRepository(Brand) private brandRepository: Repository<Brand>) { }
    async findAll(): Promise<Brand[]> {
        return await this.brandRepository.find()
    }
    async findBrand(brandId: number): Promise<Brand> {
        return this.brandRepository.findOne({where:{id:brandId}})
        // return this.brandRepository.findOne({ where: { id: parseInt(brandId) } })
    }
    async createBrand(newProduct: any): Promise<Brand> {
        return this.brandRepository.save(newProduct)
    }
    async deleteBrand(brandId: number): Promise<any> {
        return await this.brandRepository.delete({ id:brandId})
    }

    async updateBrand(brandId: number, newProduct: any) {
        // return `product ${productId} modified with ${newProduct}`
        let toUpdate = await this. brandRepository.findOne({ where: { id: brandId} })
        let updated = Object.assign(toUpdate, newProduct);
        return this.brandRepository.save(updated)
    }
}
