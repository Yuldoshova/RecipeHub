import { Router } from "express";
import ingredientController from "./ingredient.controller";

export const ingredientRoutes = Router()

ingredientRoutes
    .get('/all', ingredientController.getAllIngredients)
    .get('/:recipeId', ingredientController.getAllIngredientsByRecipeId)
    .post('/add', ingredientController.createIngredient)
    .put('/update/:ingredientId', ingredientController.updateIngredient)
    .delete('/delete/:ingredientId', ingredientController.deleteIngredient)

export default ingredientRoutes