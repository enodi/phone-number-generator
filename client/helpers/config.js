import axios from "axios";

const path = process.env.NODE_ENV === "production" ? 
  "https://tel-phone-number-generator.herokuapp.com": 
  "http://localhost:3201";

export const generatePhoneNumbers = (totalNumbersToBeGenerated, sortBy) => {
  return axios.post(`${path}/api/v1/phone-number?order=${sortBy}`, {
    totalNumbersToBeGenerated
  });
};

export const getPhoneNumbers = () => axios.get(`${path}/api/v1/phone-number`);

export const downloadPhoneNumbers = () => axios.get(`${path}/api/v1/phone-number/download`);
