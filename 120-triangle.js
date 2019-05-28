var minimumTotal = T => {
  for (let i = T.length - 2; i >= 0; i--)
    for (let j = 0; j <= i; j++)
      T[i][j] += Math.min(T[i + 1][j], T[i + 1][j + 1])

  return T[0][0]
};