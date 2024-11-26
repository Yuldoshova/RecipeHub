import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', name: "first_name", nullable: true })
    firstName: string

    @Column({ type: 'varchar', name: "last_name", nullable: true })
    lastName: string

    @Column({ type: 'varchar', name: "email", nullable: false })
    email: string

    @Column({ type: 'varchar', name: "password", nullable: false })
    password: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate:"CURRENT_TIMESTAMP(6)" })
    updatedAt: Date
}
