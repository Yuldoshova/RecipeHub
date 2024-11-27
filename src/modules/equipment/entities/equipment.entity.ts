import { Recipe } from "src/modules/recipe/entities/recipe.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "equipments" })
export class Equipment {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "name", type: "varchar", unique: true, nullable: false })
    name: string

    @ManyToMany(() => Recipe, (recipe) => recipe.equipments, { cascade: true })
    @JoinTable()
    recipes: Recipe[]
}
