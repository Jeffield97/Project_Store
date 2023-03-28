import { SaleDto } from "src/sales/sales.dto"
export class ClientDto {
    readonly nombre: string
    readonly apellido: string
    readonly ci: string
    readonly direccion: string
    readonly sale: SaleDto
}