import { Client } from "src/client/client.entity";
import { Product } from "src/productos/productos.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Product, (product) => product.id)
    @JoinColumn({ name: 'idProducto' })
    idProducto: Product[]

    @ManyToOne(() => Client, (client) => client.id)
    idCliente: Client

    @Column()
    fecha: Date

    @Column()
    cantidad: number
    
    @Column()
    precio: number
}