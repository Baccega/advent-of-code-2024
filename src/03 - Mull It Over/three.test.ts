import { expect, test } from "vitest";
import { threePartOne, threePartTwo } from "./three";

test("test two", () => {
  const testInput = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
  const testInput2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

  expect(threePartOne(testInput)).toBe(161);
  expect(threePartTwo(testInput2)).toBe(48);
});
