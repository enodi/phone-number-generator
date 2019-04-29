export const IsNotANumber = (value) => {
  if (isNaN(value)) {
    return true;
  }
};

export const IsGreaterThanMaximumNumber = (value) => {
  if (value > process.env.MAX_NUMBER) {
    return true;
  }
};

export const IsLessThanMinimumNumber = (value) => {
  if (value < process.env.MIN_NUMBER) {
    return true;
  }
};
