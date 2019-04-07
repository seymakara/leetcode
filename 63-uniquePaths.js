var uniquePathsWithObstacles = function (obstacleGrid) {
  var row = obstacleGrid.length;
  var column = obstacleGrid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (obstacleGrid[i][j] === 1) obstacleGrid[i][j] = 0;
      else if (i === 0 && j === 0) obstacleGrid[0][0] = 1;
      else {
        obstacleGrid[i][j] = (i > 0 ? obstacleGrid[i - 1][j] : 0) + (j > 0 ? obstacleGrid[i][j - 1] : 0)
      }

    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};