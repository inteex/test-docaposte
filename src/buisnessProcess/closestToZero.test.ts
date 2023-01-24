import { closestToZero } from "./ClosestToZero";

describe("closestToZero", () => {
  it("should retrun 4", () => {
    const result = closestToZero([9, 4, 42]);
    expect(result).toEqual(4);
  });
  it("should retrun -1", () => {
    const result = closestToZero([15, 7, 9, -6, 10, -1, 18]);
    expect(result).toEqual(-1);
  });
  it("should retrun 4", () => {
    const result = closestToZero([4, 2, 3, -2]);
    expect(result).toEqual(2);
  });
  it("should not throw an error", () => {
    const result = closestToZero([]);
    expect(result).toBeUndefined;
  });
});
