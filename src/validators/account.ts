import { joi, validateAsPromise } from "./joi.config";
import { IAccount } from "../interfaces/IAccount";

const create = joi.object().keys({
  idPerson: joi.number().required(),
  dailyLimit: joi.number().required(),
  balance: joi.number().required(),
  isActive: joi.boolean().required(),
  accountType: joi.number().required(),
  createdDate: joi.Date().required()
});

const draft = joi.object().keys({
  idAccount: joi.number().required(),
  draftValue: joi.number().required()
});

const deposit = joi.object().keys({
  idAccount: joi.number().required(),
  depositValue: joi.number().required()
});

const active = joi.object().keys({
  idAccount: joi.number().required(),
  isActive: joi.boolean().required()
});

export function validateCreate(model: any): Promise<IAccount> {
  return validateAsPromise<IAccount>(model, create);
}

export function validateDraft(model: any): Promise<Object> {
  return validateAsPromise<Object>(model, draft);
}

export function validateDeposit(model: any): Promise<Object> {
  return validateAsPromise<Object>(model, deposit);
}

export function validateActive(model: any): Promise<IAccount> {
  return validateAsPromise<IAccount>(model, active);
}
