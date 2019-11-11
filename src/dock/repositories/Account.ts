import { AccountDTO } from "../../models/AccountDTO";
import { IAccount } from "../../interfaces/IAccount";

export async function create(account: IAccount): Promise<AccountDTO> {
  const response = await AccountDTO.create({
    idPerson: account.idPerson,
    dailyLimit: account.dailyLimit,
    balance: account.balance,
    isActive: account.isActive,
    accountType: account.accountType,
    createdDate: account.createdDate
  });
  return response;
}

export async function getAccount(idAccount: number): Promise<AccountDTO> {
  const response = await AccountDTO.findOne({
    where: {
      idAccount
    }
  });
  return response;
}

export async function newDraft(
  account: AccountDTO,
  draftValue
): Promise<AccountDTO> {
  const newAccount = await account.update({
    balance: account.balance - draftValue
  });
  return newAccount;
}

export async function newDeposit(
  account: AccountDTO,
  depositValue
): Promise<AccountDTO> {
  const newAccount = await account.update({
    balance: account.balance + depositValue
  });
  return newAccount;
}

export async function updateActive(
  account: AccountDTO,
  isActive
): Promise<AccountDTO> {
  const newAccount = await account.update({
    isActive: isActive
  });
  return newAccount;
}
