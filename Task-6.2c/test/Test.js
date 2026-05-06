const expect = require("chai").expect;
const request = require("request");

describe("Add API Tests", function () {

    const baseUrl = "http://localhost:4000";

    // Test 1: Valid addition
    it("should return correct sum for valid numbers", function (done) {
        request.get(`${baseUrl}/add?num1=2&num2=3`, function (err, res, body) {
            expect(body).to.include("5");
            done();
        });
    });

    // Test 2: Decimal numbers
    it("should handle decimal numbers", function (done) {
        request.get(`${baseUrl}/add?num1=2.5&num2=2.5`, function (err, res, body) {
            expect(body).to.include("5");
            done();
        });
    });

    // Test 3: Invalid input
    it("should return error for invalid input", function (done) {
        request.get(`${baseUrl}/add?num1=a&num2=3`, function (err, res, body) {
            expect(body).to.include("Invalid numbers");
            done();
        });
    });

    // Test 4: Missing parameter
    it("should return error for missing input", function (done) {
        request.get(`${baseUrl}/add?num1=10`, function (err, res, body) {
            expect(body).to.include("Invalid numbers");
            done();
        });
    });

});



