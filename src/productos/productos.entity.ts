import { Brand } from 'src/brand/brand.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from 'typeorm'
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => Brand, (brand) => brand.id)
    @JoinTable({ name: 'brandID' })
    idmarca: Brand
    @Column()
    nombre: string
    @Column('text')
    detalle: string
    @Column()
    stock: number
    @Column()
    precioUnitario: number

}