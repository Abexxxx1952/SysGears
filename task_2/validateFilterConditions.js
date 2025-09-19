import { allowedConditionsMap } from "./conditions.js";
export function validateFilterConditions(inputConditions, inputKeySet) {
  if (!inputConditions || typeof inputConditions !== "object") {
    throw new Error("Filter conditions must be an object");
  }
  if (
    !inputConditions.hasOwnProperty("condition") ||
    typeof inputConditions.condition !== "object" ||
    inputConditions.condition === null ||
    Object.keys(inputConditions.condition).length === 0
  ) {
    throw new Error(
      'Filter conditions must be like {"condition": {"include" : [{ "name": "Jane", "email": "jane@mail.com" }], "exclude": [{ "name": "John" }, { "email": "john2@mail.com" }], "sortBy" : ["email"]}}'
    );
  }

  Object.keys(inputConditions.condition).forEach((key) => {
    if (!allowedConditionsMap.has(key)) {
      throw new Error(`Condition key: ${key} is not provided`);
    }

    const condition = allowedConditionsMap.get(key);
    if (
      !condition.allowedValuesFunction(
        inputConditions.condition[key],
        inputKeySet
      )
    ) {
      throw new Error(
        `Condition key: ${key} has invalid value: ${inputConditions.condition[key]}`
      );
    }
  });

  return inputConditions;
}
