import * as express from "express";

import {
  createTransaction,
  getAllAccountTransaction
} from "./actions";

export const router = express.Router();

router.post("/", createTransaction);
router.get("/:idAccount", getAllAccountTransaction);
