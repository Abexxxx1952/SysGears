export const testCases = [
  { distance: { unit: "m", value: 1 }, convertTo: "cm" },
  { distance: { unit: "cm", value: 100 }, convertTo: "m" },
  { distance: { unit: "in", value: 12 }, convertTo: "ft" },
  { distance: { unit: "ft", value: 3 }, convertTo: "yd" },
  { distance: { unit: "m", value: 1000 }, convertTo: "km" },
  { distance: { unit: "km", value: 1 }, convertTo: "m" },
  { distance: { unit: "mm", value: 1000 }, convertTo: "m" },
  { distance: { unit: "m", value: 0.5 }, convertTo: "ft" },
  { distance: { unit: "ft", value: 6 }, convertTo: "m" },
  { distance: { unit: "yd", value: 1 }, convertTo: "ft" },
  { distance: { unit: "in", value: 1 }, convertTo: "cm" },
  { distance: { unit: "cm", value: 2.54 }, convertTo: "in" },
];
