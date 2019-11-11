import { Router } from "express";

import { router as dockRoutes } from "./dock/routes";
export const router = Router();

router.use("/", dockRoutes);
