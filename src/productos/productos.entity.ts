import { Brand } from 'src/brand/brand.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, JoinColumn, OneToMany } from 'typeorm'
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => Brand, (brand) => brand.id)
    @JoinColumn({ name: 'product_fk_brand' })
    idmarca:Brand
    @Column()
    nombre: string
    @Column('text')
    detalle: string
    @Column()
    stock: number
    @Column()
    precioUnitario: number

}