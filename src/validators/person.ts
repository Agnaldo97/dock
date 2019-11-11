import { joi, validateAsPromise } from "./joi.config";
import { IPerson } from "../interfaces/IPerson";

const create = joi.object().keys({
  name: joi.string().required(),
  cpf: joi.string().required(),
  birthDate: joi.string(),
});


export function validateCreate(model: any): Promise<IPerson> {
  return validateAsPromise<IPerson>(model, create);
}