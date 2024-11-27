import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "equipments" })
export class Equipment {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "name", type: "varchar", unique: true, nullable: false })
    name: string

}
