import axios from "axios";

const path = process.env.NODE_ENV === "production" ? 
  "https://tel-phone-number-generator.herokuapp.com": 
  "http://localhost:3201";
const generatePhoneNumbers = (totalNumbersToBeGenerated, sortBy) => {
  return axios.post(`${path}/api/v1/phone-number?order=${sortBy}`, {
    totalNumbersToBeGenerated
  });
};

export default generatePhoneNumbers;
