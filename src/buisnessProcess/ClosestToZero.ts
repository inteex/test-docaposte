/**
 *
 * @param values
 * @returns closest number to zero
 */
export const closestToZero = (values: number[]): number => {
    if (!values.length) return;
  let min: number = +values[0];
  for (let index = 1; index < values.length; index++) {
    const element = +values[index];
    if (Math.abs(element) < Math.abs(min)) min = element;
    else if (Math.abs(element) == Math.abs(min) && element > 0) min = element;
  }
  return min;
};

// console.log(closestToZero([9, 4, 42]));
// console.log(closestToZero([15, 7, 9, -6, 10, -1, 18]));
// console.log(closestToZero([4, 2, 3, -2]));
