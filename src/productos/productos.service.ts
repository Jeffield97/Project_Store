import { Injectable } from '@nestjs/common';
import { Product } from './productos.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm'
import { Brand } from 'src/brand/brand.entity';

@Injectable()
export class ProductosService {
    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>,) { }
    async findAll(): Promise<Product[]> {
        return await this.productsRepository.find()
    }

    async findProduct(productId: string): Promise<Product> {
        return this.productsRepository.findOne({ where: { id: parseInt(productId) } })
        // return this.productsRepository.findOne({where:{i}})
    }
    async createProduct(newProduct: any): Promise<Product> {
        return this.productsRepository.save(newProduct)
    }
    async deleteProduct(productId: string): Promise<any> {
        return await this.productsRepository.delete({ id: parseInt(productId) })
    }

    async updateProduct(productId: string, newProduct: any) {
        let toUpdate = await this.productsRepository.findOne({ where: { id: parseInt(productId) } })
        let updated = Object.assign(toUpdate, newProduct);
        return this.productsRepository.save(updated)
    }

    async getProductsByBrand(brandId: string): Promise<any> {
        // let newBrand: Brand
        // return brandId
        return await this.productsRepository.find({ where: { idmarca: brandId }, relations['idmarca']})
    }
}
