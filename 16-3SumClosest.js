var threeSumClosest = function (nums, target) {
  // sort the numbers
  nums = nums.sort(function (a, b) { return a - b; });
  let res = nums[0] + nums[1] + nums[2];
  if (res === target) {
    return res
  }
  for (let i = 0; i < nums.length; i++) {
    j = i + 1;
    k = nums.length - 1;
    while (j < k) {
      let tempSum = nums[i] + nums[j] + nums[k];
      if (tempSum === target) return tempSum;
      if (Math.abs(target - tempSum) < Math.abs(target - res)) {
        res = tempSum;
      }
      if (tempSum < target) {
        j++;
      }
      else if (tempSum > target) {
        k--;
      }
    }
  }
  return res;
};