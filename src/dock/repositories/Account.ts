import { AccountDTO } from "../../models/AccountDTO";
import { IAccount } from "../../interfaces/IAccount";
import { sequelize } from "../../sequelize";


export async function create(account: IAccount): Promise<AccountDTO> {
  sequelize.addModels([AccountDTO]);

  const response = await AccountDTO.create({
    idPerson: account.idPerson,
    dailyLimit: account.dailyLimit,
    balance: account.balance,
    isActive: account.isActive,
    accountType: account.accountType,
    createdDate: new Date()
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
  const valueBalance: any = account.balance
  const newAccount = await account.update({
    balance: parseFloat(valueBalance)  - draftValue
  });
  return newAccount;
}

export async function newDeposit(
  account: AccountDTO,
  depositValue
): Promise<AccountDTO> {
  const valueBalance: any = account.balance
  const newAccount = await account.update({
    balance: parseFloat(valueBalance) + depositValue
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
