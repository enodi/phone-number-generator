import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../app";

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
        })
        .catch(error => {
          done(error);
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
        })
        .catch(error => {
          done(error);
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
        })
        .catch(error => {
          done(error);
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
        })
        .catch(error => {
          done(error);
        });
    });
  });
});
