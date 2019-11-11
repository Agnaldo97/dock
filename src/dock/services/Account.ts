import * as AccountRepository from "../repositories/Account";
import { AccountDTO } from "../../models/AccountDTO";
import { IAccount } from "../../interfaces/IAccount";

export async function create(account: IAccount): Promise<AccountDTO> {
  const response: AccountDTO = await AccountRepository.create(account);
  return response;
}

export async function getAccount(idAccount: number): Promise<AccountDTO> {
  const response: AccountDTO = await AccountRepository.getAccount(idAccount);
  return response;
}

export async function newDraft(
  account: AccountDTO,
  draftValue
): Promise<AccountDTO> {
  const response: AccountDTO = await AccountRepository.newDraft(
    account,
    draftValue
  );
  return response;
}

export async function newDeposit(
  account: AccountDTO,
  depositValue
): Promise<AccountDTO> {
  const response: AccountDTO = await AccountRepository.newDeposit(
    account,
    depositValue
  );
  return response;
}

export async function updateActive(
  account: AccountDTO,
  isActive
): Promise<AccountDTO> {
  const response: AccountDTO = await AccountRepository.updateActive(
    account,
    isActive
  );
  return response;
}
