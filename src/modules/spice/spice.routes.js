import { Router } from "express";
import spiceController from "./spice.controller.js";

export const spiceRoutes = Router()

spiceRoutes
    .get('/all', spiceController.getAllSpices)
    .get('/:recipeId', spiceController.getAllSpicesByRecipeId)
    .post('/add', spiceController.createSpice)
    .put('/update/:spiceId', spiceController.updateSpice)
    .delete('/delete/:spiceId', spiceController.deleteSpice)


export default spiceRoutes