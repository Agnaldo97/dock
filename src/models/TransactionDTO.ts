import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  DataType
} from "sequelize-typescript";
import { ITransaction } from "../interfaces/ITransaction";
import { AccountDTO } from "./AccountDTO";

@Table({ modelName: "transacoes" })
export class TransactionDTO extends Model implements ITransaction {
  @AutoIncrement
  @PrimaryKey
  @Column({ field: "idTransacao" })
  idTransaction: number;

  @Column({ field: "idConta" })
  @ForeignKey(() => AccountDTO)
  idAccount!: number;

  @Column({ field: "valor", type: DataType.DECIMAL(10, 2) })
  value!: number;

  @Column({ field: "dataTransacao" })
  transactionDate!: Date;
}
