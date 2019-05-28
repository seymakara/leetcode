var matrixReshape = function (nums, r, c) {
  const r0 = nums.length, c0 = nums[0].length, result = [];
  if (r * c != r0 * c0) {
    return nums;
  }
  let array = [];
  for (let i = 0; i < r0; i++) {
    for (let j = 0; j < c0; j++) {
      array.push(nums[i][j]);
    }
  }
  while (array.length) {
    result.push(array.splice(0, c));
  }
  return result;
};