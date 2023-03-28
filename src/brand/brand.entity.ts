import { Product } from "src/productos/productos.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number
    @OneToMany(() => Product, (product) => product.idmarca)
    producto: Product[]
    @Column()
    nombre: string
    @Column('text')
    descripcion: string

}