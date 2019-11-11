import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../../errors/Account";
import { ServiceError } from "../../../utils/ServiceError";
import * as accountService from "../../services/Account";
import * as accountValidator from "../../../validators/account";
import { IAccount } from "../../../interfaces/IAccount";
import { AccountDTO } from "../../../models/AccountDTO";

export async function createAccount(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const account: IAccount = await accountValidator.validateCreate(req.body);
    await accountService.create(account);

    res.status(201).send();
  } catch (err) {
    errorHandler(err, res);
  }
}

export async function getAccountBalance(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const idAccount: number = parseInt(req.params.idAccount);
    const account = await accountService.getAccount(idAccount);

    //Validete roles
    await valideErrors(account);

    res.status(200).json({ balance: account.balance });
  } catch (err) {
    errorHandler(err, res);
  }
}

export async function newDraft(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: any = await accountValidator.validateDraft(req.body);
    const account: AccountDTO = await accountService.getAccount(
      model.idAccount
    );

    //Validete roles
    await valideErrors(account, model);

    //Update Account
    await accountService.newDraft(account, model.draftValue);

    res.status(204).send();
  } catch (err) {
    errorHandler(err, res);
  }
}

export async function newDeposit(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: any = await accountValidator.validateDeposit(req.body);
    const account: AccountDTO = await accountService.getAccount(
      model.idAccount
    );

    //Validate roles
    await valideErrors(account);

    //Update Account
    await accountService.newDeposit(account, model.depositValue);

    res.status(204).send();
  } catch (err) {
    errorHandler(err, res);
  }
}

export async function updateActive(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: IAccount = await accountValidator.validateActive(req.body);
    const account: AccountDTO = await accountService.getAccount(
      model.idAccount
    );

    //Validate roles
    await valideErrors(account);

    //Update Account
    await accountService.updateActive(account, model.isActive);

    res.status(204).send();
  } catch (err) {
    errorHandler(err, res);
  }
}

async function valideErrors(account, model = undefined) {
  if (!account) throw new ServiceError("account-not-found");
  if (!account.isActive)
    throw new ServiceError("account-is-blocked");
  if (model !== undefined && model.draftValue !== undefined  && account.balance < model.draftValue)
    throw new ServiceError("value-not-available");
  if (model !== undefined && model.draftValue !== undefined  && model.draftValue > account.dailyLimit)
    throw new ServiceError("operation-not-available");
}
