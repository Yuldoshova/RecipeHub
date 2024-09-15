import { Router } from "express";
import categoryController from "./category.controller.js";
import { upload } from "../../utils/multer.js";


export const categoryRoutes = Router()

categoryRoutes
    .get('/all', categoryController.getAllCategories)
    .post('/add', upload.single('image'), categoryController.createCategory)
    .put('/update/:categoryId', categoryController.updateCategory)
    .delete('/delete/:categoryId', categoryController.deleteCategory)


export default categoryRoutes