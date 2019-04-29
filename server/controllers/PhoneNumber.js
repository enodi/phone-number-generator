import path from "path";
import fs from "fs";

import { IsNotANumber, IsGreaterThanMaximumNumber, IsLessThanMinimumNumber } from "../helpers/validators";
import { generateNumbers, writeNumbersToFile, fileExists } from "../helpers/numbers";

const pathToFile = path.join(__dirname, "../../numbers.txt");

export const generatePhoneNumbers = (req, res) => {
  const { totalNumbersToBeGenerated } = req.body;
  const { order } = req.query;
  const value = parseInt(totalNumbersToBeGenerated, 10);

  if (IsNotANumber(value)) {
    return (res.status(400).json({
      error: {
        message: "Invalid input. Please enter a valid number."
      }
    }));
  }

  if (IsLessThanMinimumNumber(value)) {
    return (res.status(422).json({
      error: {
        message: `Number cannot be less than ${process.env.MIN_NUMBER}`
      }
    }));
  }

  if (IsGreaterThanMaximumNumber(value)) {
    return (res.status(422).json({
      error: {
        message: `Number cannot be greater than ${process.env.MAX_NUMBER}`
      }
    }));
  }

  const numbersToFile = generateNumbers(totalNumbersToBeGenerated, order);
  writeNumbersToFile(pathToFile, numbersToFile, res);

  return res.status(201).json({
    status: "success",
    message: "Phone numbers generated successfully",
    data: numbersToFile
  });
};

export const getPhoneNumbers = (req, res) => {
  if (!fs.existsSync(pathToFile)) {
    return res.status(404).json({ error: { message: "File doesn't exist" } });
  }

  fs.readFile(pathToFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({ error: { message: err.message } });
    }

    const content = JSON.parse(data);
    const sortedNumbers = content.randomPhoneNumbers.sort();

    return res.status(200).json({
      status: "success",
      message: "Phone numbers retrieved successfully",
      data: {
        smallestNumber: sortedNumbers[0],
        largestNumber: sortedNumbers[sortedNumbers.length - 1],
        totalPhoneNumbersGenerated: sortedNumbers.length
      }
    });
  });
};

export const downloadFile = (req, res) => {
  fileExists(pathToFile, res);

  res.download(pathToFile, "phone-numbers.txt", (err) => {
    if (err) {
      return res.status(500).json({ error: { message: "Download failed. Please try again" } });
    }
  });
};
