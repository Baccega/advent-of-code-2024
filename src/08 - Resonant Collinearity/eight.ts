export function eightPartOne(input: string[][]): number {
  const antinodesMap = input.map((row) => row.map(() => "."));

  const frequencies: { [key: string]: [number, number][] } = {};

  // get all frequencies locations
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i][j] === ".") continue;
      if (!frequencies[input[i][j]]) {
        frequencies[input[i][j]] = [];
      }
      frequencies[input[i][j]].push([i, j]);
    }
  }

  console.log(frequencies);

  for (const frequency of Object.values(frequencies)) {
    for (let i = 0; i < frequency.length; i++) {
      for (let j = i + 1; j < frequency.length; j++) {
        const x1 = frequency[i][0];
        const y1 = frequency[i][1];
        const x2 = frequency[j][0];
        const y2 = frequency[j][1];

        const xDiff = Math.abs(x1 - x2);
        const yDiff = Math.abs(y1 - y2);

        console.log([i, j], [x1, y1], [x2, y2], [xDiff, yDiff]);

        if (x1 < x2 && y1 < y2) {
          if (x1 - xDiff >= 0 && y1 - yDiff >= 0) {
            antinodesMap[x1 - xDiff][y1 - yDiff] = "#";
          }
          if (
            x2 + xDiff < antinodesMap.length &&
            y2 + yDiff < antinodesMap[0].length
          ) {
            antinodesMap[x2 + xDiff][y2 + yDiff] = "#";
          }
        } else if (x1 < x2 && y1 > y2) {
          if (x1 - xDiff >= 0 && y1 + yDiff < antinodesMap[0].length) {
            antinodesMap[x1 - xDiff][y1 + yDiff] = "#";
          }
          if (x2 + xDiff < antinodesMap.length && y2 - yDiff >= 0) {
            antinodesMap[x2 + xDiff][y2 - yDiff] = "#";
          }
        } else if (x1 > x2 && y1 < y2) {
          if (x1 + xDiff < antinodesMap.length && y1 - yDiff >= 0) {
            antinodesMap[x1 + xDiff][y1 - yDiff] = "#";
          }
          if (
            x2 - xDiff < antinodesMap.length &&
            y2 + yDiff < antinodesMap[0].length
          ) {
            antinodesMap[x2 - xDiff][y2 + yDiff] = "#";
          }
        } else if (x1 > x2 && y1 > y2) {
          if (
            x1 + xDiff < antinodesMap.length &&
            y1 + yDiff < antinodesMap[0].length
          ) {
            antinodesMap[x1 + xDiff][y1 + yDiff] = "#";
          }
          if (x2 - xDiff >= 0 && y2 - yDiff >= 0) {
            antinodesMap[x2 - xDiff][y2 - yDiff] = "#";
          }
        }
      }
    }
  }

  for (let index = 0; index < input.length; index++) {
    console.log(input[index].reduce((acc, curr) => `${acc} ${curr}`, ""));
  }
  console.log("\n");

  for (let index = 0; index < antinodesMap.length; index++) {
    console.log(
      antinodesMap[index].reduce((acc, curr) => `${acc} ${curr}`, "")
    );
  }

  let totalAntinodes = 0;
  for (let x = 0; x < antinodesMap.length; x++) {
    for (let y = 0; y < antinodesMap[x].length; y++) {
      if (antinodesMap[x][y] === "#") {
        totalAntinodes++;
      }
    }
  }
  return totalAntinodes;
}
