import { sortBy } from "./filterConditions/sortBy.js";
import { include } from "./filterConditions/include.js";
import { exclude } from "./filterConditions/exclude.js";

const allowedConditions = [sortBy, include, exclude]; // <-- Add your conditions here

export const allowedConditionsMap = new Map(
  allowedConditions
    .map((item) => [item.conditionName, item])
    .sort((a, b) => a[1].priority - b[1].priority)
);
