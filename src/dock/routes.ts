import * as express from "express";
import { router as accountsRoutes } from "./routes/account/routes";

export const router = express.Router();

router.use("/account", accountsRoutes);
