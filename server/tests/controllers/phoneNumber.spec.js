import chai, { expect } from "chai";
import path from "path";
import chaiHttp from "chai-http";
import app from "../../app";

import { removeFile } from "../../helpers/numbers";

const pathToFile = path.join(__dirname, "../../../client/public/numbers.txt");

chai.use(chaiHttp);

describe("Phone Numbers", () => {
  describe("POST /api/v1/phone-number", () => {
    it("should return a successful message if the number specified is valid", (done) => {
      chai
        .request(app)
        .post("/api/v1/phone-number")
        .send({ totalNumbersToBeGenerated: 4 })
        .then(res => {
          expect(res.body.message)
            .to.equal("Phone numbers generated successfully");
          expect(res.status).to.equal(201);
          expect(res.body.data.randomPhoneNumbers).to.be.an("array");
          done();
        });
    });

    it("should return a validation error if the number of phone-numbers is not specified", (done) => {
      chai
        .request(app)
        .post("/api/v1/phone-number")
        .send({ totalNumbersToBeGenerated: "" })
        .then(res => {
          expect(res.body.error.message)
            .to.equal("Invalid input. Please enter a valid number.");
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("error");
          done();
        });
    });

    it("should return a validation error if number is less than 0", (done) => {
      chai
        .request(app)
        .post("/api/v1/phone-number")
        .send({ totalNumbersToBeGenerated: -2 })
        .then(res => {
          expect(res.body.error.message)
            .to.equal("Number cannot be less than 0");
          expect(res.status).to.equal(422);
          expect(res.body).to.be.an("object");
          expect(res.body.error).to.have.property("message");
          done();
        });
    });

    it("should return a validation error if number is greater than 10000", (done) => {
      chai
        .request(app)
        .post("/api/v1/phone-number")
        .send({ totalNumbersToBeGenerated: 10050 })
        .then(res => {
          expect(res.body.error.message)
            .to.equal("Number cannot be greater than 10000");
          expect(res.status).to.equal(422);
          expect(res.body).to.be.an("object");
          expect(res.body.error).to.have.property("message");
          done();
        });
    });
  });

  describe("GET /api/v1/phone-number/download", () => {
    it("should return success message upon successful download", (done) => {
      chai
        .request(app)
        .get("/api/v1/phone-number/download")
        .then(res => {
          expect(res.body).to.be.an("object");
          expect(res.status).to.equal(200);
          done();
        });
    });
  });

  describe("GET /api/v1/phone-number", () => {
    it("should return a success message when phone numbers have been retrieved", (done) => {
      chai
        .request(app)
        .get("/api/v1/phone-number")
        .then(res => {
          expect(res.body.message)
            .to.equal("Phone numbers retrieved successfully");
          expect(res.body.data).to.be.an("object");
          expect(res.body.status).to.equal("success");
          expect(res.status).to.equal(200);
          expect(res.body.data).to.have.property("totalPhoneNumbersGenerated");
          done();
        });
    });

    it("should return error if file doesn't exist", (done) => {
      removeFile(pathToFile);
      chai
        .request(app)
        .get("/api/v1/phone-number")
        .then(res => {
          expect(res.status).to.equal(404);
          expect(res.body.error.message)
            .to.equal("File doesn't exist");
          expect(res.body.error).to.be.an("object");
          done();
        })
        .catch(error => {
          done(error);
        });
    });
  });
});
