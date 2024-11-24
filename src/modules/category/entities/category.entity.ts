import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "name", type: "varchar", unique: true, length: 100, nullable: false })
    name: string

    @Column({ name: "description", type: "text", length: 500, nullable: true })
    description: string

    @Column({ name: "image_url", type: "varchar", nullable: true })
    imageUrl: string
}
