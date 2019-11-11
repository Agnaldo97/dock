import * as PersonRepository from "../repositories/Person";
import { PersonDTO } from "../../models/PersonDTO";
import { IPerson } from "../../interfaces/IPerson";

export async function create(person: IPerson): Promise<PersonDTO> {
  const response: PersonDTO = await PersonRepository.create(person);
  return response;
}