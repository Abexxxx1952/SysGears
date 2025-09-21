export function generateLocation(maxValues = [100, 100, 100]) {
  if (!Array.isArray(maxValues) || maxValues.length < 3) {
    throw new Error("The parameter must be an array of at least 3 numbers");
  }
  return Array.from({ length: 3 }, (_, index) =>
    Math.floor(Math.random() * (maxValues[index] + 1))
  );
}
