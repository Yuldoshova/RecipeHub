import { Recipe } from "./recipe.model.js"

export class RecipeController {
    #_model

    constructor() {
        this.#_model = Recipe
    }

    getAllRecipes = async (req, res) => {
        const allRecipes = await this.#_model.find()

        res.status(200).send({
            message: "Success",
            data: allRecipes
        })
    }

    createRecipe = async (req, res) => {
        const { name, description } = req.body
        const image_url = req.file.filename

        const newRecipe = await this.#_model.create({
            name, description, image_url
        })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newRecipe
        })
    }

    updateRecipe = async (req, res) => {
        const { name, description } = req.body
        const { recipeId } = req.params
        const image_url = req.file.filename

        const updatedRecipe = await this.#_model.findByIdAndUpdate({ _id: recipeId }, {
            name, description, image_url
        })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updatedRecipe
        })
    }

    deleteRecipe = async (req, res) => {
        const { recipeId } = req.params

        await this.#_model.findByIdAndDelete({ _id: recipeId })

        res.status(200).send({
            message: "Successfully deleted!✅",
        })
    }

}

export default new RecipeController()