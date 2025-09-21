export const exclude = {
  conditionName: "exclude",
  allowedValuesFunction: function (conditionValue, inputKeySet) {
    if (
      !Array.isArray(conditionValue) ||
      !conditionValue.every((item) => {
        if (typeof item !== "object" || item === null) {
          return false;
        }

        const keys = Object.keys(item);

        return keys.every((key) => inputKeySet.has(key));
      })
    ) {
      const allowedKeys = [...inputKeySet].join(", ");
      throw new Error(
        `Condition value ${this.conditionName} must be an array of object with keys only from: ${allowedKeys}`
      );
    }
    return true;
  },
  modifyDataFunction: function (data, conditionValue) {
    return [...data].filter((item) =>
      conditionValue.some((condition) =>
        Object.keys(condition).every((key) => item[key] !== condition[key])
      )
    );
  },
  priority: 1,
};
