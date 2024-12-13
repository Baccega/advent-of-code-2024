const DIRECTIONS = {
  NORTH: "NORTH",
  SOUTH: "SOUTH",
  EAST: "EAST",
  WEST: "WEST",
} as const;

function findGuard(map: string[][]): [number, number] {
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === "^") {
        return [x, y];
      }
    }
  }
  console.log("GUARD NOT FOUND!");
  return [0, 0];
}

function getNextPosition(
  currentPosition: number[],
  direction: keyof typeof DIRECTIONS
): [number, number] {
  switch (direction) {
    case DIRECTIONS.NORTH:
      return [currentPosition[0] - 1, currentPosition[1]];
    case DIRECTIONS.SOUTH:
      return [currentPosition[0] + 1, currentPosition[1]];
    case DIRECTIONS.EAST:
      return [currentPosition[0], currentPosition[1] + 1];
    case DIRECTIONS.WEST:
      return [currentPosition[0], currentPosition[1] - 1];
  }
}

function turnGuard(
  currentDirection: keyof typeof DIRECTIONS
): keyof typeof DIRECTIONS {
  switch (currentDirection) {
    case DIRECTIONS.NORTH:
      return DIRECTIONS.EAST;
    case DIRECTIONS.SOUTH:
      return DIRECTIONS.WEST;
    case DIRECTIONS.EAST:
      return DIRECTIONS.SOUTH;
    case DIRECTIONS.WEST:
      return DIRECTIONS.NORTH;
  }
}

export function sixPartOne(map: string[][]): number {
  let currentDirection: keyof typeof DIRECTIONS = DIRECTIONS.NORTH;
  let currentPosition = findGuard(map);

  map[currentPosition[0]][currentPosition[1]] = "X";

  while (
    currentPosition[0] > 0 &&
    currentPosition[0] < map.length - 1 &&
    currentPosition[1] > 0 &&
    currentPosition[1] < map[0].length - 1
  ) {
    const nextPosition = getNextPosition(currentPosition, currentDirection);
    const nextTile = map[nextPosition[0]][nextPosition[1]];
    if (nextTile === "#") {
      currentDirection = turnGuard(currentDirection);
    } else if (nextTile === "." || nextTile === "X") {
      map[nextPosition[0]][nextPosition[1]] = "X";
      currentPosition = nextPosition;
    }
  }

  let totalVisitedPositions = 0;
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === "X") {
        totalVisitedPositions++;
      }
    }
  }

  // Print map
  for (let index = 0; index < map.length; index++) {
    console.log(map[index].reduce((acc, curr) => acc + curr, ""));
  }

  return totalVisitedPositions;
}

export function sixPartTwo(map: string[][]): number {
  // The first part erases the guard position
  // This is for the test
  const firstPosition = [6, 4];
  // This is for the problem
  // const firstPosition = [90, 91];
  let totalPossibleObstaclePositions = 0;

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === "X") {
        map[x][y] = "#";
        let looped = false;
        let currentPosition = firstPosition;
        let currentDirection: keyof typeof DIRECTIONS = DIRECTIONS.NORTH;
        const pastPositions: { pos: number[]; dir: keyof typeof DIRECTIONS }[] =
          [
            {
              pos: firstPosition,
              dir: currentDirection,
            },
          ];
        while (
          looped === false &&
          currentPosition[0] > 0 &&
          currentPosition[0] < map.length - 1 &&
          currentPosition[1] > 0 &&
          currentPosition[1] < map[0].length - 1
        ) {
          const nextPosition = getNextPosition(
            currentPosition,
            currentDirection
          );
          const nextTile = map[nextPosition[0]][nextPosition[1]];
          if (
            pastPositions.some(
              (pos) =>
                pos.pos[0] === nextPosition[0] &&
                pos.pos[1] === nextPosition[1] &&
                currentDirection === pos.dir
            )
          ) {
            looped = true;
            totalPossibleObstaclePositions++;
          } else {
            pastPositions.push({
              pos: nextPosition,
              dir: currentDirection,
            });
            if (nextTile === "#") {
              currentDirection = turnGuard(currentDirection);
            } else {
              currentPosition = nextPosition;
            }
          }
        }

        map[x][y] = ".";
      }
    }
  }

  return totalPossibleObstaclePositions;
}
