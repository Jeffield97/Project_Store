import { Brand } from 'src/brand/brand.entity'
import { Sale } from 'src/sales/sales.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, JoinColumn, OneToMany } from 'typeorm'
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => Brand, (brand) => brand.producto)
    // @JoinColumn({ name: 'idmarca' })
    idmarca: Brand
    @Column()
    nombre: string
    @Column('text')
    detalle: string
    @Column()
    stock: number
    @Column()
    precioUnitario: number
    @OneToMany(type => Sale, sale => sale.idProducto) sale: Sale

}