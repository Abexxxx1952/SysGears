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
    return [
      ...data.sort((a, b) => {
        a[conditionValue[0]] - b[conditionValue[0]];
      }),
    ];
  },
  priority: 2,
};
