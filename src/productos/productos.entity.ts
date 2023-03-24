import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    idmarca: number
    @Column()
    nombre: string
    @Column('text')
    detalle: string
    @Column()
    stock: number
    @Column()
    precioUnitario: number

}