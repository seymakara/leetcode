var uniquePaths = function (m, n) {
  let matrix = Array(m).fill(Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j]
    }
  }
  return matrix[m - 1][n - 1]
};