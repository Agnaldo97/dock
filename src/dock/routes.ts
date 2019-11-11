import * as express from "express";
import { router as accountsRoutes } from "./routes/account/routes";

export const router = express.Router();

router.use("/account", accountsRoutes);
router.get('/status', (req, res) => res.json({ status: "UP", status_code: 200 }))