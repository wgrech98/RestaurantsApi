export const roundToDecimalPoints = (value) =>
  Math.round((value + Number.EPSILON) * 100) / 100;
