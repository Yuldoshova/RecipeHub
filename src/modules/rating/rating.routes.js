import { Router } from "express";
import ratingController from "./rating.controller.js";

export const ratingRoutes = Router()

ratingRoutes
    .get('/all', ratingController.getAllRatings)
    .post('/add', ratingController.createRating)
    .put('/update/:ratingId', ratingController.updateRating)
    .delete('/delete/:ratingId', ratingController.deleteRating)

export default ratingRoutes