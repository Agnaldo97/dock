import * as request from "supertest";
import * as app from "../../dist/app";
import * as userFactory from "../utils/factories/userFactory";

describe("Person", () => {
  it("should insert a person", async () => {
    const response = await request(app)
      .post("/api/person")
      .send({
        cpf: "890.321.223-11",
        name: "Test",
        birthDate: "2010-08-09"
      });

    expect(response.status).toBe(200);
  });
});

