import * as Transactionepository from "../repositories/Transaction";
import { TransactionDTO } from "../../models/TransactionDTO";
import { ITransaction } from "../../interfaces/ITransaction";

export async function create(transaction: ITransaction): Promise<TransactionDTO> {
  const response: TransactionDTO = await Transactionepository.create(transaction);
  return response;
}