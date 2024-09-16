import { Router } from "express";
import commentController from "./comment.controller.js";

export const commentRoutes = Router()

commentRoutes
    .get('/all', commentController.getAllComments)
    .post('/add', commentController.createComment)
    .put('/update/:commentId', commentController.updateComment)
    .delete('/delete/:commentId', commentController.deleteComment)

export default commentRoutes