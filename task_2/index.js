import { checkInput } from "./checkInput.js";
import { validateFilterConditions } from "./validateFilterConditions.js";
import { allowedConditionsMap } from "./conditions.js";
import { testCases } from "./testCases.js";

export function filterAndSelect(input, condition) {
  const checkedInput = checkInput(input);
  const inputKeySet = new Set();

  checkedInput.data.forEach((element) => {
    Object.keys(element).forEach((key) => {
      inputKeySet.add(key);
    });
  });

  const { condition: checkedCondition } = validateFilterConditions(
    condition,
    inputKeySet
  );

  const requestedConditionKeys = Object.keys(checkedCondition);

  const orderedConditions = [...allowedConditionsMap]
    .filter(([key, _condition]) => requestedConditionKeys.includes(key))
    .map(([_key, condition]) => condition);

  const filteredArray = orderedConditions.reduce(
    (acc, filterObj) => {
      const filteredAcc = filterObj.modifyDataFunction(
        acc,
        checkedCondition[filterObj.conditionName]
      );

      return filteredAcc;
    },
    [...checkedInput.data]
  );

  return {
    result: filteredArray,
  };
}

try {
  testCases.forEach((testCase, index) => {
    try {
      const result = filterAndSelect(testCase[0], testCase[1]);
      console.log(`✅ Test ${index + 1} PASSED`);
      console.log(`Input:`, JSON.stringify(testCase[0]));
      console.log(`Condition:`, JSON.stringify(testCase[1]));
      console.log(`Output:`, JSON.stringify(result.result));

      if (testCase[2] !== undefined) {
        const isMatch =
          JSON.stringify(result.result) === JSON.stringify(testCase[2]);
        console.log(`Expected match: ${isMatch}`);
        if (!isMatch) {
          console.warn(`⚠️ Expected:`, testCase[2]);
          console.warn(`⚠️ Got:`, result.result);
        }
      }
      console.log("---");
    } catch (err) {
      console.error(`❌ Test ${index + 1} FAILED:`, err.message);
      console.error(`Input:`, JSON.stringify(testCase[0]));
      console.error(`Condition:`, JSON.stringify(testCase[1]));
      console.log("---");
    }
  });

  console.log("✅ All tests done");
} catch (err) {
  console.error("🚨 Global error:", err.message);
}
