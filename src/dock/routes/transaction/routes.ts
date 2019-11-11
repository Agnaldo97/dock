import * as express from "express";

import {
  createTransaction,
  getAllAccountTransaction,
  getTransactionByPeriod
} from "./actions";

export const router = express.Router();

router.post("/", createTransaction);
router.get("/:idAccount", getAllAccountTransaction);
router.get("/:startDate/:endDate", getTransactionByPeriod);
