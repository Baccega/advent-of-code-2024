import { expect, test } from "vitest";
import { oneTest } from "./one";

test("test fn", () => {
  expect(oneTest()).toBe("foo");
});
