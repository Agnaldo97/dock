import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../../errors/Account";
import * as personService from "../../services/Person";
import * as personValidator from "../../../validators/person";
import { IPerson } from "../../../interfaces/IPerson";

export async function createPerson(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const person: IPerson = await personValidator.validateCreate(req.body);
    const response =await personService.create(person);

    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res);
  }
}