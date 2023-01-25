import { closestToZero } from "../src/buisnessProcess/closestToZero";

describe("closestToZero", () => {
  it("should retrun 4", () => {
    const result = closestToZero([9, 4, 42]);
    expect(result).toEqual(4);
  });
  it("should retrun a negative number", () => {
    const result = closestToZero([15, 7, 9, -6, 10, -1, 18]);
    expect(result).toEqual(-1);
  });
  it("should retrun the positive one", () => {
    const result = closestToZero([4, 2, 3, -2]);
    expect(result).toEqual(2);
  });
  it("should retrun the only element", () => {
    const result = closestToZero([4]);
    expect(result).toEqual(4);
  });
  it("should not throw an error", () => {
    const result = closestToZero([]);
    expect(result).toBeUndefined;
  });
});
