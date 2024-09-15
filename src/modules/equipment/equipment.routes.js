import { Router } from "express";
import equipmentController from "./equipment.controller.js";

export const equipmentRoutes = Router()

equipmentRoutes
    .get('/all', equipmentController.getAllEquipments)
    .get('/:recipeId', equipmentController.getAllEquipmentsByRecipeId)
    .post('/add', equipmentController.createEquipment)
    .put('/update/:equipmentId', equipmentController.updateEquipment)
    .delete('/delete/:equipmentId', equipmentController.deleteEquipment)


export default equipmentRoutes