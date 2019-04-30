import axios from "axios";

const path = process.env.NODE_ENV === "production" ? 
  "https://tel-phone-number-generator.herokuapp.com": 
  "http://localhost";
const port = process.env.NODE_ENV === "production" ? process.env.PORT : "3000";
const generatePhoneNumbers = (totalNumbersToBeGenerated, sortBy) => {
  return axios.post(`${path}:${port}/api/v1/phone-number?order=${sortBy}`, {
    totalNumbersToBeGenerated
  });
};

export default generatePhoneNumbers;
