import { Router } from "express";
import equipmentRoutes from "../modules/equipment/equipment.routes.js";
import spiceRoutes from "../modules/spice/spice.routes.js";

export const routes = Router()

routes.use('/equipments', equipmentRoutes)
routes.use('/spices', spiceRoutes)

export default routes;