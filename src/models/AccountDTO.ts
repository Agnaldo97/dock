import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey
} from "sequelize-typescript";
import { IAccount } from "../interfaces/IAccount";
import { PersonDTO } from "./PersonDTO";

@Table({ modelName: "contas" })
export class AccountDTO extends Model implements IAccount {
  @AutoIncrement
  @PrimaryKey
  @Column({ field: "idConta" })
  idAccount: number;

  @Column({ field: "idPessoa" })
  @ForeignKey(() => PersonDTO)
  idPerson!: number;

  @Column({ field: "saldo", type: DataType.DECIMAL(10, 2) })
  balance!: number;

  @Column({ field: "limiteSaqueDiario", type: DataType.DECIMAL(10, 2) })
  dailyLimit!: number;

  @Column({ field: "flagAtivo" })
  isActive!: boolean;

  @Column({ field: "tipoConta" })
  accountType!: number;

  @Column({ field: "dataCriacao" })
  createdDate!: Date;
}
