import { generateLocation } from "./generateLocation.js";
import { validateCoordinate } from "./validateCoordinate.js";
import { spaceArea } from "./constants.js";
import { calculateDistanceBetweenPoints } from "./calculateDistanceBetweenPoints.js";
import { trilaterationLeastSquares } from "./solveTrilateration.js";
import { arrayToObject } from "./utils.js";
import { testCases } from "./testCases.js";

export function simulation(asteroidLocationInput) {
  let asteroidLocation;
  if (asteroidLocationInput === undefined) {
    asteroidLocation = generateLocation(spaceArea);
  }
  asteroidLocation = validateCoordinate(asteroidLocationInput);

  let probQuantity = 0;

  let calculatedAsteroidLocation = null;

  const measurements = new Map();

  while (calculatedAsteroidLocation === null) {
    let probCoordinatesStr = null;
    while (probCoordinatesStr === null) {
      const probCoordinatesTemp = generateLocation(spaceArea).join(",");

      if (measurements.has(probCoordinatesTemp)) {
        continue;
      }

      probCoordinatesStr = probCoordinatesTemp;
    }
    const probCoordinates = probCoordinatesStr.split(",").map(Number);

    const probDistance = calculateDistanceBetweenPoints(
      asteroidLocation,
      probCoordinates
    );

    if (probDistance === 0) {
      calculatedAsteroidLocation = probCoordinates;
    }
    measurements.set(probCoordinatesStr, {
      coordinates: probCoordinates,
      distance: probDistance,
    });
    probQuantity += 1;

    const result = trilaterationLeastSquares(measurements);

    if (result !== null) {
      calculatedAsteroidLocation = result;
      break;
    }
  }

  return {
    result: {
      location: arrayToObject(calculatedAsteroidLocation),
      probes: {
        count: probQuantity,
        coordinates: [...measurements.values()].map(({ coordinates }) =>
          arrayToObject(coordinates)
        ),
      },
    },
  };
}

try {
  testCases.forEach((testCase, index) => {
    /*   if (index !== 1) {
      return;
    } */
    try {
      const result = simulation(testCase);
      console.log(`Test ${index + 1} PASSED`);
      console.log(`Input:`, JSON.stringify(testCase));
      console.log(`Output:`, JSON.stringify(result));

      console.log("---");
    } catch (err) {
      console.error(`Test ${index + 1} FAILED:`, err.message);
      console.error(`Input:`, JSON.stringify(testCase[0]));
      console.log("---");
    }
  });

  console.log("All tests done");
} catch (err) {
  console.error("Global error:", err.message);
}
