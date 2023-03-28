import { Client } from "src/client/client.entity";
import { Product } from "src/productos/productos.entity";

export class SaleDto {
    readonly id:number;
    readonly idProducto:Product[];
    readonly idCliente:Client;
    readonly fecha:Date;
    readonly cantidad:number;
    readonly precio:number;
}