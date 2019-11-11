import * as express from "express";

import {
  createTransaction,
} from "./actions";

export const router = express.Router();

router.post("/", createTransaction);