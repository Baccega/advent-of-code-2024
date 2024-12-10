function checkTop(input: string[][], x: number, y: number): number {
  if (x < 3) return 0;

  return input[x - 1][y] === "M" &&
    input[x - 2][y] === "A" &&
    input[x - 3][y] === "S"
    ? 1
    : 0;
}

function checkRight(input: string[][], x: number, y: number): number {
  if (y >= input[0].length - 3) return 0;

  return input[x][y + 1] === "M" &&
    input[x][y + 2] === "A" &&
    input[x][y + 3] === "S"
    ? 1
    : 0;
}

function checkBottom(input: string[][], x: number, y: number): number {
  if (x >= input[0].length - 3) return 0;

  return input[x + 1][y] === "M" &&
    input[x + 2][y] === "A" &&
    input[x + 3][y] === "S"
    ? 1
    : 0;
}

function checkLeft(input: string[][], x: number, y: number): number {
  if (y < 3) return 0;

  return input[x][y - 1] === "M" &&
    input[x][y - 2] === "A" &&
    input[x][y - 3] === "S"
    ? 1
    : 0;
}

function checkTopLeft(input: string[][], x: number, y: number): number {
  if (x < 3 || y < 3) return 0;

  return input[x - 1][y - 1] === "M" &&
    input[x - 2][y - 2] === "A" &&
    input[x - 3][y - 3] === "S"
    ? 1
    : 0;
}

function checkTopRight(input: string[][], x: number, y: number): number {
  if (x >= input[0].length - 3 || y < 3) return 0;

  return input[x + 1][y - 1] === "M" &&
    input[x + 2][y - 2] === "A" &&
    input[x + 3][y - 3] === "S"
    ? 1
    : 0;
}

function checkBottomLeft(input: string[][], x: number, y: number): number {
  if (x < 3 || y >= input[0].length - 3) return 0;

  return input[x - 1][y + 1] === "M" &&
    input[x - 2][y + 2] === "A" &&
    input[x - 3][y + 3] === "S"
    ? 1
    : 0;
}

function checkBottomRight(input: string[][], x: number, y: number): number {
  if (x >= input[0].length - 3 || y >= input[0].length - 3) return 0;

  return input[x + 1][y + 1] === "M" &&
    input[x + 2][y + 2] === "A" &&
    input[x + 3][y + 3] === "S"
    ? 1
    : 0;
}

export function fourPartOne(input: string[][]): number {
  let total = 0;
  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input[0].length; y++) {
      if (input[x][y] === "X") {
        total += checkTop(input, x, y);
        total += checkRight(input, x, y);
        total += checkBottom(input, x, y);
        total += checkLeft(input, x, y);
        total += checkTopLeft(input, x, y);
        total += checkTopRight(input, x, y);
        total += checkBottomLeft(input, x, y);
        total += checkBottomRight(input, x, y);
      }
    }
  }

  return total;
}

function checkLetterTopLeft(
  letter: string,
  input: string[][],
  x: number,
  y: number
): boolean {
  if (x === 0 || y === 0) return false;

  return input[x - 1][y - 1] === letter;
}

function checkLetterBottomLeft(
  letter: string,
  input: string[][],
  x: number,
  y: number
): boolean {
  if (x === input[0].length - 1 || y === 0) return false;

  return input[x + 1][y - 1] === letter;
}

function checkLetterTopRight(
  letter: string,
  input: string[][],
  x: number,
  y: number
): boolean {
  if (x === 0 || y === input[0].length - 1) return false;

  return input[x - 1][y + 1] === letter;
}

function checkLetterBottomRight(
  letter: string,
  input: string[][],
  x: number,
  y: number
): boolean {
  if (x === input.length - 1 || y === input[0].length - 1) return false;

  return input[x + 1][y + 1] === letter;
}

export function fourPartTwo(input: string[][]): number {
  let total = 0;
  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input[0].length; y++) {
      if (input[x][y] === "A") {
        const mTopLeft = checkLetterTopLeft("M", input, x, y);
        const mTopRight = checkLetterTopRight("M", input, x, y);

        if (mTopLeft && mTopRight) {
          const sBottomLeft = checkLetterBottomLeft("S", input, x, y);
          const sBottomRight = checkLetterBottomRight("S", input, x, y);

          if (sBottomLeft && sBottomRight) {
            total += 1;
          }
        }

        const sTopLeft = checkLetterTopLeft("S", input, x, y);
        const sTopRight = checkLetterTopRight("S", input, x, y);

        if (sTopLeft && sTopRight) {
          const mBottomLeft = checkLetterBottomLeft("M", input, x, y);
          const mBottomRight = checkLetterBottomRight("M", input, x, y);

          if (mBottomLeft && mBottomRight) {
            total += 1;
          }
        }

        const mTopLeftCross = checkLetterTopLeft("M", input, x, y);
        const mBottomLeftCross = checkLetterBottomLeft("M", input, x, y);

        if (mTopLeftCross && mBottomLeftCross) {
          const sTopRight = checkLetterTopRight("S", input, x, y);
          const sBottomRight = checkLetterBottomRight("S", input, x, y);

          if (sTopRight && sBottomRight) {
            total += 1;
          }
        }

        const mTopRightCross = checkLetterTopRight("M", input, x, y);
        const mBottomRightCross = checkLetterBottomRight("M", input, x, y);

        if (mTopRightCross && mBottomRightCross) {
          const sTopLeft = checkLetterTopLeft("S", input, x, y);
          const sBottomLeft = checkLetterBottomLeft("S", input, x, y);

          if (sTopLeft && sBottomLeft) {
            total += 1;
          }
        }
      }
    }
  }

  return total;
}
