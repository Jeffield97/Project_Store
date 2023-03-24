import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryColumn()
    id: string
    @Column()
    nombre: string
    @Column()
    apellido: string
    @Column()
    ci: string
    @Column('text')
    direccion: string
}