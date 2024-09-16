import { Router } from "express";
import equipmentRoutes from "../modules/equipment/equipment.routes.js";
import spiceRoutes from "../modules/spice/spice.routes.js";
import instructionRoutes from "../modules/instruction/instruction.routes.js";
import ingredientRoutes from "../modules/ingredient/ingredient.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";
import commentRoutes from "../modules/comment/comment.routes.js";
import ratingRoutes from "../modules/rating/rating.routes.js";

export const routes = Router()

// routes.use('/auth', )
// routes.use('/users',)
// routes.use('/recipes',)
routes.use('/equipments', equipmentRoutes)
routes.use('/spices', spiceRoutes)
routes.use('/instructions', instructionRoutes)
routes.use('/ingredients', ingredientRoutes)
routes.use('/categories', categoryRoutes)
routes.use('/comment',commentRoutes)
routes.use('/rating', ratingRoutes)

export default routes;