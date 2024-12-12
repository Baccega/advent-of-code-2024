function checkEquationValidity({
  currentResult,
  targetResult,
  equation,
}: {
  currentResult: number;
  targetResult: number;
  equation: number[];
}): boolean {
  if (currentResult === targetResult) return true;
  if (currentResult > targetResult || equation.length === 0) return false;

  const [first, ...rest] = equation;

  return (
    checkEquationValidity({
      currentResult: currentResult + first,
      targetResult,
      equation: rest,
    }) ||
    checkEquationValidity({
      currentResult: currentResult * first,
      targetResult,
      equation: rest,
    })
  );
}

export function sevenPartOne(input: Record<string, number[]>): number {
  let total = 0;
  Object.entries(input).forEach(([result, equations]) => {
    const [first, ...rest] = equations;
    if (
      !checkEquationValidity({
        targetResult: Number(result),
        equation: rest,
        currentResult: first,
      })
    )
      return;
    total += Number(result);
  });

  return total;
}

function checkEquationValidityWithConcat({
  currentResult,
  targetResult,
  equation,
}: {
  currentResult: number;
  targetResult: number;
  equation: number[];
}): boolean {
  if (currentResult === targetResult) return true;
  if (currentResult > targetResult || equation.length === 0) return false;

  const [first, ...rest] = equation;

  return (
    checkEquationValidityWithConcat({
      currentResult: currentResult + first,
      targetResult,
      equation: rest,
    }) ||
    checkEquationValidityWithConcat({
      currentResult: currentResult * first,
      targetResult,
      equation: rest,
    }) ||
    checkEquationValidityWithConcat({
      currentResult: Number(`${currentResult}${first}`),
      targetResult,
      equation: rest,
    })
  );
}

export function sevenPartTwo(input: Record<string, number[]>): number {
  let total = 0;
  Object.entries(input).forEach(([result, equations]) => {
    const [first, ...rest] = equations;
    if (
      !checkEquationValidityWithConcat({
        targetResult: Number(result),
        equation: rest,
        currentResult: first,
      })
    )
      return;
    total += Number(result);
  });

  return total;
}
