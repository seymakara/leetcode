var minPathSum = function (grid) {
  let row = grid.length;
  let column = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i > 0 && j > 0) grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      else if (i > 0) grid[i][j] += grid[i - 1][j];
      else if (j > 0) grid[i][j] += grid[i][j - 1];
    }
  }
  return grid[row - 1][column - 1]
};