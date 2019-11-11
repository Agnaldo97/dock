import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement
} from "sequelize-typescript";
import { IPerson } from "../interfaces/IPerson";

@Table({ modelName: "pessoas" })
export class PersonDTO extends Model implements IPerson {
  @AutoIncrement
  @PrimaryKey
  @Column({ field: "idPessoa" })
  idPerson: number;

  @Column({ field: "nome" })
  name!: string;

  @Column({ field: "cpf" })
  cpf!: string;

  @Column({ field: "dataNascimento" })
  birthDate!: Date;
}
