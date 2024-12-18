export function getFileMap(input: number[]): string[] {
  const fileMap: string[] = [];
  let currentId = 0;
  for (let i = 0; i < input.length; i++) {
    const currentBlock = input[i];
    if (i % 2 === 0) {
      for (let j = 0; j < currentBlock; j++) {
        fileMap.push(currentId + "");
      }
      currentId++;
    } else {
      for (let j = 0; j < currentBlock; j++) {
        fileMap.push(".");
      }
    }
  }

  return fileMap;
}

function checkSum(fileMap: string[]): number {
  return fileMap.reduce((acc, curr, i) => {
    if (curr === ".") return acc;
    return acc + Number(curr) * i;
  }, 0);
}

export function ninePartOne(input: number[]): number {
  const fileMap = getFileMap(input);

  let j = 0;
  for (let index = fileMap.length - 1; index >= 0 && index > j; index--) {
    const element = fileMap[index];
    if (element === ".") continue;

    while (fileMap[j] !== "." && j < fileMap.length) {
      j++;
    }

    if (j < index) {
      fileMap[j] = fileMap[index];
      fileMap[index] = ".";
    }
  }

  return checkSum(fileMap);
}

export function ninePartTwo(input: number[]): number {
  const fileMap = getFileMap(input);

  console.log(fileMap);
  let j = 0;
  for (let index = fileMap.length - 1; index >= 0 && index > j; index--) {
    const element = fileMap[index];
    if (element === ".") continue;

    while (fileMap[j] !== "." && j < fileMap.length) {
      j++;
    }

    if (j < index) {
      fileMap[j] = fileMap[index];
      fileMap[index] = ".";
    }
  }

  return checkSum(fileMap);
}
