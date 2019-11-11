import { PersonDTO } from "../../models/PersonDTO";
import { IPerson } from "../../interfaces/IPerson";
import { sequelize } from "../../sequelize";


export async function create(person: IPerson): Promise<PersonDTO> {
  const response = await PersonDTO.create({
    cpf: person.cpf,
    name: person.name,
    birthDate: person.birthDate
  });
  return response;
}
