import { Router } from "express";
import equipmentRoutes from "../modules/equipment/equipment.routes.js";

export const routes = Router()

routes.use('/equipments', equipmentRoutes)

export default routes;