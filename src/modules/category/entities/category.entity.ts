import { Recipe } from "src/modules/recipe/entities/recipe.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "name", type: "varchar", unique: true, length: 100, nullable: false })
    name: string

    @Column({ name: "description", type: "text", nullable: true })
    description: string

    @Column({ name: "image_url", type: "varchar", nullable: true })
    imageUrl: string

    @ManyToMany(() => Recipe, (recipe) => recipe.categories, { cascade: true })
    @JoinTable()
    recipes: Recipe[]
}
