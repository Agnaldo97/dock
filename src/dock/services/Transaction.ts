import * as Transactionepository from "../repositories/Transaction";
import { TransactionDTO } from "../../models/TransactionDTO";
import { ITransaction } from "../../interfaces/ITransaction";

export async function create(transaction: ITransaction): Promise<TransactionDTO> {
  const response: TransactionDTO = await Transactionepository.create(transaction);
  return response;
}

export async function getAll(idAccount): Promise<TransactionDTO[]> {
  const response: TransactionDTO[] = await Transactionepository.getAll(idAccount);
  return response;
}

export async function getTransactionByPeriod(reqStartDate, reqEndDate): Promise<TransactionDTO[]> {

  let { startDate, endDateFim } = await startDates(reqStartDate, reqEndDate)

  startDate = new Date(startDate)
  endDateFim = new Date(endDateFim)

  const response: TransactionDTO[] = await Transactionepository.getTransactionByPeriod(startDate, endDateFim);
  return response;
}

async function startDates(startDate, endDateFim) {
  if (startDate !== undefined && endDateFim === undefined) {
    endDateFim = await formatDate()
  } else if (startDate === undefined && endDateFim !== undefined) {
    startDate = "2000-01-01"
  }
  return { startDate, endDateFim };
}

async function formatDate() {
  var d = new Date();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}