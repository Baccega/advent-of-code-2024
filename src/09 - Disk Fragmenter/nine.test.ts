import { expect, test } from "vitest";
import { getFileMap, ninePartOne } from "./nine";

test("09", () => {
  const testInput = [2, 3, 3, 3, 1, 3, 3, 1, 2, 1, 4, 1, 4, 1, 3, 1, 4, 0, 2];

  expect(getFileMap(testInput)).toStrictEqual([
    "0",
    "0",
    ".",
    ".",
    ".",
    "1",
    "1",
    "1",
    ".",
    ".",
    ".",
    "2",
    ".",
    ".",
    ".",
    "3",
    "3",
    "3",
    ".",
    "4",
    "4",
    ".",
    "5",
    "5",
    "5",
    "5",
    ".",
    "6",
    "6",
    "6",
    "6",
    ".",
    "7",
    "7",
    "7",
    ".",
    "8",
    "8",
    "8",
    "8",
    "9",
    "9",
  ]);
  expect(ninePartOne(testInput)).toBe(1928);
  // expect(ninePartTwo(testInput)).toBe(11387);
});
