import * as request from "supertest";
import * as app from "../../dist/app";

describe("Status", () => {

  it("should get Stasus OK", async () => {
    const response = await request(app)
      .get(`/api/status`)

    expect(response.status).toBe(200);
  });

});
