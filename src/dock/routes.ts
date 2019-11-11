import * as express from "express";
import { router as accountsRoutes } from "./routes/account/routes";
import { router as personRoutes } from "./routes/person/routes";
import { router as transactionRoutes } from "./routes/transaction/routes";

export const router = express.Router();

router.use("/account", accountsRoutes);
router.use("/person", personRoutes);
router.use("/transaction", transactionRoutes);
router.get('/status', (req, res) => res.json({ status: "UP", status_code: 200 }))