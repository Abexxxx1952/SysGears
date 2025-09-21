export const sortBy = {
  conditionName: "sortBy",
  allowedValuesFunction: function (conditionValue, inputKeySet) {
    if (
      !Array.isArray(conditionValue) ||
      typeof conditionValue[0] !== "string" ||
      !inputKeySet.has(conditionValue[0])
    ) {
      const allowedKeys = [...inputKeySet].join(", ");
      throw new Error(
        `Condition value ${this.conditionName} must be an array of string from: ${allowedKeys}`
      );
    }
    return true;
  },
  modifyDataFunction: function (data, conditionValue) {
    return [...data].sort((a, b) => {
      const key = conditionValue[0];
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === "number" && typeof valB === "number") {
        return valA - valB;
      }

      const strA = String(valA);
      const strB = String(valB);

      if (strA < strB) return -1;
      if (strA > strB) return 1;
      return 0;
    });
  },
  priority: 2,
};
