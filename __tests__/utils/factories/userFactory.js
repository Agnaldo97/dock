const { factory } = require("factory-girl");

const faker = require("faker");

const { PersonDTO } = require("../../../src/models/PersonDTO");
const { AccountDTO } = require("../../../src/models/AccountDTO");
const { sequelize } = require("../../../src/sequelize");

sequelize.addModels([PersonDTO]);
sequelize.addModels([AccountDTO]);


factory.define("Person", PersonDTO, {
  name: faker.name.findName(),
  cpf: "1234568910",
  birthDate: new Date().toISOString(),
});

factory.define("Account", AccountDTO, {
  balance: faker.random.number(),
  idPerson: faker.random.number(),
});

module.exports = factory;
