export function isRowSafe(
  row: number[],
  way: "asc" | "desc"
): [boolean, number] {
  let failingIndex = -1;
  const isSafe = row.reduce((acc, curr, index) => {
    if (index >= row.length - 1 || !acc) return acc;

    const next = row[index + 1];

    if (Math.abs(curr - next) > 3) {
      failingIndex = index;
      return false;
    }

    if ((way === "asc" && next <= curr) || (way === "desc" && next >= curr)) {
      failingIndex = index;
      return false;
    }
    return true;
  }, true);

  return [isSafe, failingIndex];
}

export function twoPartOne(input: number[][]): number {
  return input.reduce(
    (acc, curr) =>
      isRowSafe(curr, "asc")[0] || isRowSafe(curr, "desc")[0] ? acc + 1 : acc,
    0
  );
}

export function isRowSafeDampened(row: number[], way: "asc" | "desc"): boolean {
  const [safe, failingIndex] = isRowSafe(row, way);
  if (safe) return true;

  const filteredRow = row.filter((_, index) => index !== failingIndex);
  const [safeAfterRemoval] = isRowSafe(filteredRow, way);

  return safeAfterRemoval;
}

export function twoPartTwo(input: number[][]): number {
  return input.reduce(
    (acc, curr) =>
      isRowSafeDampened(curr, "asc") || isRowSafeDampened(curr, "desc")
        ? acc + 1
        : acc,
    0
  );
}
