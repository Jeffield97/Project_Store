import { Injectable } from '@nestjs/common';
import { Product } from './productos.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm'
import { ProductoDto } from './productos.dto';

@Injectable()
export class ProductosService {
    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) { }
    async findAll(): Promise<Product[]> {
        return await this.productsRepository.find()
    }

    async findProduct(productId: string): Promise<Product> {
        return this.productsRepository.findOne({ where: { id: parseInt(productId) } })
    }
    async createProduct(newProduct: ProductoDto): Promise<Product> {
        return this.productsRepository.save(newProduct)
    }
    async deleteProduct(productId: string): Promise<any> {
        return await this.productsRepository.delete({ id: parseInt(productId) })
    }

    async updateProduct(productId: string, newProduct: ProductoDto) {
        let toUpdate = await this.productsRepository.findOne({ where: { id: parseInt(productId) } })
        let updated = Object.assign(toUpdate, newProduct);
        return this.productsRepository.save(updated)
    }

    async getProductsByBrand(brandId: string): Promise<any> {
        return this.productsRepository.find({ where: { idmarca: { id: parseInt(brandId) } } })
    }
}
