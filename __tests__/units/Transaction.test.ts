import * as request from "supertest";
import * as app from "../../dist/app";
import * as userFactory from "../utils/factories/userFactory";

describe("Account", () => {
  let realUser: any;
  let realAccount: any;

  beforeEach(async () => {
    if (realUser !== undefined) {
      return;
    }
    const person = await userFactory.create("Person");
    realUser = person.get({ plain: true });

    const account = await userFactory.create("Account", {
      idPerson: realUser.idPerson,
      dailyLimit: 300.00,
      balance: 400,
      isActive: true,
      accountType: 1
    });
    realAccount = account.get({ plain: true });
  });

  it("should insert a transaction", async () => {
    const response = await request(app)
      .post("/api/transaction")
      .send({
        idAccount: realAccount.idAccount,
        value: 300.00
      });

    expect(response.status).toBe(200);
  });
});

