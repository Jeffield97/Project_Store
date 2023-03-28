import { Brand } from "src/brand/brand.entity";
import { Sale } from "src/sales/sales.entity";

export class ProductoDto {
    readonly idmarca: Brand
    readonly nombre:string
    readonly detalle: string
    readonly stock:number
    readonly precioUnitario:number
}