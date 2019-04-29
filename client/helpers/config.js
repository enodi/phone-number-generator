import axios from "axios";

const generatePhoneNumbers = (totalNumbersToBeGenerated, sortBy) => {
  return axios.post(`http://localhost:3000/api/v1/phone-number?order=${sortBy}`, {
    totalNumbersToBeGenerated
  });
};

export default generatePhoneNumbers;
