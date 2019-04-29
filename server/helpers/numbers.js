import fs from "fs";

export const generateNumbers = (total, order) => {
  let numbersGenerated = new Set();
  let count = 1;
  while (count <= total) {
    numbersGenerated.add((Math.random() * 0.1).toString().slice(2, 12));
    count++;
  }

  const sortedNumbers = (order === "desc") ? [...numbersGenerated].sort((a, b) => b - a) : [...numbersGenerated].sort();

  return { randomPhoneNumbers: sortedNumbers };
};

const writeToFile = (path, data) => {
  fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  });
};

export const writeNumbersToFile = async (path, data, res) => {
  try {
    await writeToFile(path, data);
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
};

export const fileExists = (path, res) => {
  if (!fs.existsSync(path)) {
    return res.status(404).json({ error: { message: "File doesn't exist" } });
  }
};
