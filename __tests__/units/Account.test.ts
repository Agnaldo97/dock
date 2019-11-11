import * as request from "supertest";
import * as app from "../../dist/app";
import * as userFactory from "../utils/factories/userFactory";

describe("Doctor", () => {
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

  it("should insert a account", async () => {
    const response = await request(app)
      .post("/api/account")
      .send({
        idPerson: realUser.idPerson,
        dailyLimit: 300.00,
        balance: 400,
        isActive: true,
        accountType: 1
      });

    expect(response.status).toBe(201);
  });

  it("should not insert a account without idPerson", async () => {
    const response = await request(app)
      .post("/api/account")
      .send({
        dailyLimit: 300.00,
        balance: 400,
        isActive: true,
        accountType: 1
      });
    expect(response.status).toBe(401);
  });

  it("should not draft a account blocked", async () => {
    realAccount.isActive = false
    const response = await request(app)
      .put("/api/account/draft")
      .send({
        idAccount: realAccount.idAccount,
        draftValue: 320
      });
    expect(response.status).toBe(401);
  });
});

