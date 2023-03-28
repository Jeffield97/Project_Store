import { Product } from "src/productos/productos.entity"

export class BrandDto {
    readonly producto:Product[]
    readonly nombre:string
    readonly descripcion:string
}