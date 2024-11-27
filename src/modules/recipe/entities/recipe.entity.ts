import { Category } from "src/modules/category/entities/category.entity"
import { Equipment } from "src/modules/equipment/entities/equipment.entity"
import { User } from "src/modules/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: "recipes" })
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "name", type: "varchar", unique: true, length: 100, nullable: false })
    name: string

    @Column({ name: "description", type: "text", nullable: true })
    description: string

    @Column({ name: "image_url", type: "varchar", nullable: false })
    imageUrl: string

    @Column({ name: "video_url", type: "varchar", nullable: true })
    videoUrl: string

    @Column({ name: "preparation_time", type: "varchar", nullable: false })
    preparationTime: string

    @Column({ name: "cooking_time", type: "varchar", nullable: false })
    cookingTime: string

    @Column({ name: "servings", type: "int", nullable: true })
    servings: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date

    @Column({ type: "jsonb" })
    meta: MetaType

    @ManyToOne(() => User, (user) => user.recipes, { cascade: true })
    owner: User

    @ManyToMany(() => Category, (category) => category.recipes, { cascade: true })
    @JoinTable()
    categories: Category[]

    @ManyToMany(() => Equipment, (equipment) => equipment.recipes, { cascade: true })
    @JoinTable()
    equipments: Equipment[]
}

export declare interface MetaType {
    instructions: {
        order_number: number,
        title: string
    },
    ingredients: {
        name: string,
        amount: string
    },
    spices: string[],
    images: string[]
}