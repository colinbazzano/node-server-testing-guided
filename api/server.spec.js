const request = require("supertest");

const server = require("./server.js");

describe("server.js", function() {
  describe("environment", function() {
    it("should set enviornment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  describe("GET /", function() {
    it("should return a 200 OK", function() {
      // spin up the server - return here is SO IMPORTANT
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
      // make a GET request to /
      // look at the HTTP status code for the response
    });
    it("should return a JSON", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it("should return {api: 'up'}", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.api).toBe("up");
        });
    });
    it.skip("auth example", function() {
      return request(server)
        .post("/login")
        .send({ username: "me", password: "pass" })
        .then(res => {
          const token = res.body.token;
          return request(server)
            .get("/")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200);
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
    });
  });
});

// could also be:
describe("server.js", () => {
  describe("environemt", () => {
    it("should set environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  describe("GET /", () => {
    it("should return a 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
