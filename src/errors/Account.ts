import { NextFunction, Response } from "express";

export async function errorHandler(err: Error, res: Response): Promise<any> {
  switch (err.message) {
    case "account-not-found":
      return res.status(401).send({ message: "Account not found" });
    case "value-not-available":
      return res.status(401).send({ message: "Value not available" });
    case "operation-not-available":
      return res.status(401).send({ message: "Operation not available" });
    default:
      res.status(500).json({ message: `Sorry, try again` });
  }
}
