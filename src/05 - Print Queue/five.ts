function parseRules(rawRules: number[][]) {
  const rules = {};

  for (const rule of rawRules) {
    const [start, end] = rule;

    if (rules[start]) {
      rules[start].push(end);
    } else {
      rules[start] = [end];
    }
  }
  return rules;
}

function getMiddlePage(row: number[]): number {
  const middle = Math.floor(row.length / 2);
  return row[middle];
}

function checkRulesForRow(
  reversed: number[],
  rules: Record<number, number[]>
): boolean {
  const previous = new Array<number>();
  for (let index = 0; index < reversed.length; index++) {
    const element = reversed[index];

    const notInRules = previous.some((cur) => !rules[element]?.includes(cur));

    if (notInRules) {
      return false;
    }

    previous.push(element);
  }
  return true;
}

export function fivePartOne(input: number[][], rawRules: number[][]): number {
  const rules = parseRules(rawRules);

  let total = 0;

  for (const row of input) {
    const reversed = row.reverse();

    const correct = checkRulesForRow(reversed, rules);

    if (correct) {
      total += getMiddlePage(row);
    }
  }

  return total;
}

function sortRow(row: number[], rules: Record<number, number[]>): number[] {
  return row.sort((a, b) => (rules[a]?.includes(b) ? 1 : -1));
}

export function fivePartTwo(input: number[][], rawRules: number[][]): number {
  const rules = parseRules(rawRules);

  let total = 0;

  for (const row of input) {
    const reversed = row.reverse();

    const correct = checkRulesForRow(reversed, rules);

    if (!correct) {
      const sorted = row.slice();
      sorted.sort((a, b) => (rules[a]?.includes(b) ? -1 : 1));
      total += getMiddlePage(sorted);
    } 
  }

  return total;
}
