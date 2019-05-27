var allCellsDistOrder = function (R, C, r0, c0) {
  // Create a 2D array which holds the maximum number of possible distances.
  let ordered = [...Array(R * C)].map(e => [])

  //  Traverse the whole grid
  for (let j = 0; j < R; j++) {
    for (let i = 0; i < C; i++) {
      // Get Manhattan distance
      let d = Math.abs(j - r0) + Math.abs(i - c0)
      // Add to the 2D array in an ordered manner
      ordered[d].push([j, i])
    }
  }
  // Use ES6 spread operator to flatten
  return [].concat([].concat(...ordered))
};