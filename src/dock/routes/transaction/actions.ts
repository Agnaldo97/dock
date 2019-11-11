import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../../errors/Account";
import * as transactionService from "../../services/Transaction";
import * as transactionalidator from "../../../validators/transaction";
import { ITransaction } from "../../../interfaces/ITransaction";
import * as accountService from "../../services/Account";
import { ServiceError } from "../../../utils/ServiceError";

export async function createTransaction(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const transaction: ITransaction = await transactionalidator.validateCreate(req.body);

    //Find account
    const account = await accountService.getAccount(transaction.idAccount);
    if (!account) throw new ServiceError("account-not-found");
    if (account.balance < transaction.value)
      throw new ServiceError("value-not-available");

    const response = await transactionService.create(transaction);
    await accountService.newDraft(account, transaction.value);

    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res);
  }
}

export async function getAllAccountTransaction(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const idAccount = req.params.idAccount

    //Get all transaction
    const response = await transactionService.getAll(idAccount);

    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res);
  }
}

export async function getTransactionByPeriod(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const startDate = req.params.startDate
    const endDate = req.params.endDate

    //Get all transaction
    const response = await transactionService.getTransactionByPeriod(startDate, endDate);

    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res);
  }
}
