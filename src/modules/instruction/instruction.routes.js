import { Router } from "express";
import instructionController from "./instruction.controller.js";

export const instructionRoutes = Router()

instructionRoutes
    .get('/all', instructionController.getAllInstructions)
    .get('/:recipeId', instructionController.getAllInstructionsByRecipeId)
    .post('/add', instructionController.createInstruction)
    .put('/update/:instructionId', instructionController.updateInstruction)
    .delete('/delete/:instructionId', instructionController.deleteInstruction)

export default instructionRoutes