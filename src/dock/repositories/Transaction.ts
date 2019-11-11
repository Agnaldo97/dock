import { TransactionDTO } from "../../models/TransactionDTO";
import { ITransaction } from "../../interfaces/ITransaction";
import { Op } from "sequelize";


export async function create(transaction: ITransaction): Promise<TransactionDTO> {
  const response = await TransactionDTO.create({
    idAccount: transaction.idAccount,
    value: transaction.value,
    transactionDate: new Date()
  });
  return response;
}

export async function getAll(idAccount): Promise<TransactionDTO[]> {
  const response = await TransactionDTO.findAll({
    where: {
      idAccount
    }
  });
  return response;
}

export async function getTransactionByPeriod(startDate, endDateFim): Promise<TransactionDTO[]> {
  const response = await TransactionDTO.findAll({
    where: {
      transactionDate: {
        [Op.between]: [startDate, endDateFim]
      }
    }
  });
  return response;
}
