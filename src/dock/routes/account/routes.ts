import * as express from "express";

import {
  createAccount,
  getAccountBalance,
  newDraft,
  updateActive,
  newDeposit
} from "./actions";

export const router = express.Router();

router.post("/", createAccount);
router.get("/balance/:idAccount", getAccountBalance);
router.put("/draft", newDraft);
router.put("/deposit", newDeposit);
router.put("/active", updateActive);
