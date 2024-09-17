import { Router } from "express";
import userController from "./user.controller.js";

export const userRoutes = Router()

userRoutes
    .get('/all', userController.getAllUsers)
    .post('/add', userController.createUser)
    .put('/update/:userId', userController.updateUser)
    .delete('/delete/:userId', userController.deleteUser)

export default userRoutes