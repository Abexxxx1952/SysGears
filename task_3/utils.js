export function arrayToObject(arr) {
  if (!Array.isArray(arr) || arr.length < 3) {
    throw new Error("The array must contain at least 3 elements");
  }
  return {
    x: arr[0],
    y: arr[1],
    z: arr[2],
  };
}
