import Ingredient from "./ingredient.model.js";

export class IngredientController {
    #_model;

    constructor() {
        this.#_model = Ingredient
    }

    getAllIngredients = async (req, res) => {

        const allIngredients = await this.#_model.find()

        res.status(200).send({
            message: "Success!✅",
            data: allIngredients
        })
    }

    getAllIngredientsByRecipeId = async (req, res) => {

    }

    createIngredient = async (req, res) => {
        const { amount, name,  recipe_id } = req.body;

        const newIngredient = await this.#_model.create({ amount, name,  recipe_id })

        res.status(201).send({
            message: "Successfully created!✅",
            data: newIngredient
        })
    }

    updateIngredient = async (req, res) => {
        const { amount, name,  recipe_id  } = req.body
        const { ingredientId } = req.params

        const updatedIngredient = await this.#_model.findByIdAndUpdate({ _id: ingredientId }, {amount, name,  recipe_id  })

        res.status(200).send({
            message: "Successfully updated!✅",
            data: updatedIngredient
        })
    }

    deleteIngredient = async (req, res) => {
        const { ingredientId } = req.params

        await this.#_model.findByIdAndDelete({ _id: ingredientId })

        res.status(200).send({
            message: "Successfully deleted!✅"
        })
    }
}

export default new IngredientController()