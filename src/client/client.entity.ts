import { Sale } from "src/sales/sales.entity";
import { Column, Entity, OneToMany,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: string
    @Column()
    nombre: string
    @Column()
    apellido: string
    @Column()
    ci: string
    @Column('text')
    direccion: string
    @OneToMany( type => Sale, sale => sale.idCliente)
    sale:Sale
}