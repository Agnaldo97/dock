import { TransactionDTO } from "../../models/TransactionDTO";
import { ITransaction } from "../../interfaces/ITransaction";

export async function create(transaction: ITransaction): Promise<TransactionDTO> {
  const response = await TransactionDTO.create({
    idAccount: transaction.idAccount,
    value: transaction.value,
    transactionDate: new Date()
  });
  return response;
}
