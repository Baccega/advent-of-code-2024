import { expect, test } from "vitest";
import { onePartOne, onePartTwo } from "./one";

test("test one", () => {
  const testInput = [
    [3, 4, 2, 1, 3, 3],
    [4, 3, 5, 3, 9, 3],
  ];

  expect(onePartOne(testInput)).toBe(11);
  expect(onePartTwo(testInput)).toBe(31);
});
