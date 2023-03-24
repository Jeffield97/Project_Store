import { Product } from "src/productos/productos.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    // @OneToMany(() => Product, (product) => product.marcaid)
    id: number
    @Column()
    nombre: string
    @Column('text')
    descripcion: string
}