export interface IAccount {
  idAccount?: number;
  idPerson: number;
  dailyLimit: number;
  balance: number;
  isActive: boolean;
  accountType: number;
  createdDate: Date;
}
