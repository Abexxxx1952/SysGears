import { spaceArea } from "./constants.js";

export function validateCoordinate(coords) {
  if (coords.length !== 3) {
    throw new Error("Coordinates must be arrays of 3 numbers.");
  }
  if (
    coords[0] < 0 ||
    coords[0] > spaceArea[0] ||
    coords[1] < 0 ||
    coords[1] > spaceArea[1] ||
    coords[2] < 0 ||
    coords[2] > spaceArea[2]
  ) {
    throw new Error(`The asteroid is outside the boundaries`);
  }
  return coords;
}
