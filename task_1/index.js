import { checkInput } from "./checkInput.js";
import { loadUnitsFromFile } from "./loadUnitsFromFile.js";
import { testCases } from "./testCases.js";

export async function convertDistance(input) {
  const checkedInput = checkInput(input);
  const units = await loadUnitsFromFile();

  const { distance, convertTo: outputUnit } = checkedInput;
  const { unit: inputUnit, value } = distance;

  if (typeof units[inputUnit] === "undefined") {
    throw new Error(`Unsupported input unit: ${inputUnit}`);
  }
  if (typeof units[outputUnit] === "undefined") {
    throw new Error(`Unsupported output unit: ${outputUnit}`);
  }

  const valueInMeters = value * units[inputUnit];
  const convertedValue = (valueInMeters / units[outputUnit]).toFixed(2);

  return {
    unit: outputUnit,
    value: convertedValue,
  };
}

try {
  const promises = testCases.map((testCase) =>
    convertDistance(testCase)
      .then((result) =>
        console.log(`${JSON.stringify(testCase)} → ${JSON.stringify(result)}`)
      )
      .catch((err) =>
        console.error(`For ${JSON.stringify(testCase)} Error: ${err.message}`)
      )
  );

  await Promise.all(promises);
  console.log("All tests done");
} catch (err) {
  console.error("Global error:", err.message);
}
