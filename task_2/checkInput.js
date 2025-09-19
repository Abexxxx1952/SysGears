export function checkInput(input) {
  if (!input || typeof input !== "object") {
    throw new Error("Input data must be an object");
  }

  if (!input.hasOwnProperty("data")) {
    throw new Error('Input object must have a "data" property');
  }

  if (!Array.isArray(input.data)) {
    throw new Error('Property "data" in input object must be an array');
  }

  if (input.data.length === 0) {
    throw new Error('Array "data" in input object must not be empty');
  }

  input.data.forEach((item, index) => {
    if (typeof item !== "object" || item === null) {
      throw new Error(
        `Element in array "data" with index ${index} must be an object`
      );
    }
    const keys = Object.keys(item);
    if (keys.length === 0) {
      throw new Error(
        `Element in array "data" with index ${index} must be not empty`
      );
    }

    if (!keys.every((key) => typeof key === "string")) {
      throw new Error(
        `Element in array "data" with index ${index} has non-string keys`
      );
    }

    if (!keys.every((key) => typeof item[key] === "string")) {
      throw new Error(
        `Element in array "data" with index ${index} has non-string values`
      );
    }
  });

  return input;
}
