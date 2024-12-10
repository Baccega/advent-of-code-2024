export function threePartOne(input: string): number {
  const regex = /mul\((\d+),(\d+)\)/g;
  let result = 0;

  for (const match of input.matchAll(regex)) {
    result += parseInt(match[1]) * parseInt(match[2]);
  }

  return result;
}

function inDisabledRanges(
  index: number,
  disabledRanges: { start: number; end: number }[]
) {
  return disabledRanges.some(
    (range) => index >= range.start && index <= range.end
  );
}

export function threePartTwo(input: string): number {
  const doRegex = /do\(\)/;
  const dontRegex = /don't\(\)/g;
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  let result = 0;
  const disabledRanges = new Array<{ start: number; end: number }>();

  for (const match of input.matchAll(dontRegex)) {
    const endIndex = input.slice(match.index).match(doRegex)?.index;
    disabledRanges.push({
      start: match.index,
      end: (endIndex || Infinity) + match.index,
    });
  }

  for (const match of input.matchAll(mulRegex)) {
    if (!inDisabledRanges(match.index, disabledRanges)) {
      result += parseInt(match[1]) * parseInt(match[2]);
    }
  }

  return result;
}
