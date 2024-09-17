import { Router } from "express"
import recipeController from "./recipe.controller"

export const recipeRoutes = Router()

recipeRoutes
    .get('/all', recipeController.getAllRecipes)
    .post('/add', recipeController.createRecipe)
    .put('/update/:recipeId', recipeController.updateRecipe)
    .delete('/delete/:recipeId', recipeController.deleteRecipe)

export default recipeRoutes