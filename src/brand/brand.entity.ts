import { Product } from "src/productos/productos.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Product, (product) => product.idmarca)
    id: Product
    @Column()
    nombre: string
    @Column('text')
    descripcion: string
}