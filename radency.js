function findPath(mountain) {
  const exampleMountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];

  if (!mountain || !mountain.length) {
    return "Введіть дані про гору";
  }

  const dp = new Array(mountain.length);
  for (let i = 0; i < mountain.length; i++) {
    dp[i] = new Array(mountain[i].length);
  }

  for (let i = 0; i < mountain.length; i++) {
    for (let j = 0; j < mountain[i].length; j++) {
      dp[i][j] = mountain[i][j];
    }
  }

  for (let i = 1; i < mountain.length; i++) {
    for (let j = 0; j < mountain[i].length; j++) {
      const neighbors = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
      ];
      let maxScore = 0;
      for (const neighbor of neighbors) {
        if (
          neighbor[0] >= 0 &&
          neighbor[0] < mountain.length &&
          neighbor[1] >= 0 &&
          neighbor[1] < mountain[i].length
        ) {
          maxScore = Math.max(maxScore, dp[neighbor[0]][neighbor[1]]);
        }
      }
      dp[i][j] += maxScore;
    }
  }

  let maxScore = 0;
  for (let j = 0; j < mountain[mountain.length - 1].length; j++) {
    maxScore = Math.max(maxScore, dp[mountain.length - 1][j]);
  }

  return maxScore;
}

const result = findPath(exampleMountain);
console.log(`Максимальна кількість очок: ${result}`);
