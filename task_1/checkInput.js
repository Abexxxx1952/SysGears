export function checkInput(input) {
  if (
    typeof input !== "object" ||
    input == null ||
    !input.hasOwnProperty("distance") ||
    typeof input.distance !== "object" ||
    input.distance === null ||
    !input.distance.hasOwnProperty("unit") ||
    !input.distance.hasOwnProperty("value") ||
    typeof input.distance.unit !== "string" ||
    input.distance.unit === "" ||
    typeof input.distance.value !== "number" ||
    input.distance.value < 0 ||
    !input.hasOwnProperty("convertTo") ||
    typeof input.convertTo !== "string" ||
    input.convertTo === ""
  ) {
    throw new Error(
      'Input data must be an object like { "distance": { "unit": "m", "value": 0.5 }, "convertTo": "ft" }'
    );
  }
  return input;
}
