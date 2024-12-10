import { expect, test } from "vitest";
import { isRowSafe, isRowSafeDampened, twoPartOne, twoPartTwo } from "./two";

test("02", () => {
  const testInput = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
  ];

  expect(isRowSafe(testInput[0], "desc")[0]).toBe(true);
  expect(isRowSafe(testInput[0], "asc")[0]).toBe(false);
  expect(isRowSafe(testInput[1], "desc")[0]).toBe(false);
  expect(isRowSafe(testInput[1], "asc")[0]).toBe(false);
  expect(twoPartOne(testInput)).toBe(2);
  expect(isRowSafeDampened(testInput[0], "desc")).toBe(true);
  expect(isRowSafeDampened(testInput[0], "asc")).toBe(false);
  expect(isRowSafeDampened(testInput[1], "desc")).toBe(false);
  expect(isRowSafeDampened(testInput[1], "asc")).toBe(false);
  expect(isRowSafeDampened(testInput[2], "desc")).toBe(false);
  expect(isRowSafeDampened(testInput[2], "asc")).toBe(false);
  expect(isRowSafeDampened(testInput[3], "desc")).toBe(false);
  expect(isRowSafeDampened(testInput[3], "asc")).toBe(true);
  expect(isRowSafeDampened(testInput[4], "desc")).toBe(true);
  expect(isRowSafeDampened(testInput[4], "asc")).toBe(false);
  expect(isRowSafeDampened(testInput[5], "desc")).toBe(false);
  expect(isRowSafeDampened(testInput[5], "asc")).toBe(true);
  expect(twoPartTwo(testInput)).toBe(4);
});
