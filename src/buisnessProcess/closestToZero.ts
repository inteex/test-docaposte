/**
 *
 * @param values
 * @returns closest number to zero
 */
export const closestToZero = (values: number[]): number => {
  // undefiend or empty
  if (!values || !values.length) return 0;
  else if (values.length === 1) return values[0];
  let min: number = +values[0];
  for (let index = 1; index < values.length; index++) {
    const element = +values[index];
    if (Math.abs(element) < Math.abs(min)) min = element;
    else if (Math.abs(element) == Math.abs(min) && element > 0) min = element;
  }
  return min;
};
