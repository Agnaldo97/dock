import { joi, validateAsPromise } from "./joi.config";
import { ITransaction } from "../interfaces/ITransaction";

const create = joi.object().keys({
  idAccount: joi.number().required(),
  value: joi.number().required(),
});


export function validateCreate(model: any): Promise<ITransaction> {
  return validateAsPromise<ITransaction>(model, create);
}