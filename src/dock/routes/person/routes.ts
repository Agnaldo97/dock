import * as express from "express";

import {
  createPerson,
} from "./actions";

export const router = express.Router();

router.post("/", createPerson);