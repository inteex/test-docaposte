import request from "supertest";
import { Express } from "express-serve-static-core";

import expressApp from "../src/app";
let server: Express;

beforeAll(async () => {
  server = expressApp;
});

describe("GET /", () => {
  it("should return 200 with greeting message", (done) => {
    request(server)
      .get(`/`)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).toMatchObject({ message: "Hi there :)!" });
        done();
      });
  });
});

describe("POST /closest-to-zero", () => {
  const paylod = {
    values: [1, 2, 3, 0],
  };

  it("should return 200 with result 0", (done) => {
    request(server)
      .post(`/closest-to-zero`)
      .send(paylod)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ result: 0 });
        done();
      });
  });
  const unvalidPaylod = {
    values: [1, 2, 3, 0, "abc"],
  };
  it("sould return validation error message", (done) => {
    request(server)
      .post(`/closest-to-zero`)
      .send(unvalidPaylod)
      .expect(422)
      .end(done);
  });
});
