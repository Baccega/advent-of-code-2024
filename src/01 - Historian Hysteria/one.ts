export function onePartOne(input: number[][]): number {
  const leftInputSorted = input[0].sort((a, b) => a - b);
  const rightInputSorted = input[1].sort((a, b) => a - b);

  return leftInputSorted.reduce((acc, curr, index) => {
    const distance = Math.abs(curr - rightInputSorted[index]);
    return acc + distance;
  }, 0);
}

export function onePartTwo(input: number[][]): number {
  let totalSimilarity = 0;

  input[0].forEach((leftValue, index) => {
    const appearances = input[1].filter(
      (rightValue) => rightValue === leftValue
    ).length;

    totalSimilarity += leftValue * appearances;
  });

  return totalSimilarity;
}
