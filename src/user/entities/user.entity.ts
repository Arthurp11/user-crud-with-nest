import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255})
    nome: string;

    @Column({ type: 'varchar', length: 100})
    email: string;

    @Column({ type: 'varchar', length: 50})
    senha: string;

    @Column({ type: 'varchar', length: 255})
    descricao: string;
}
