var maximumProduct = function (nums) {
  nums = nums.sort(function (a, b) { return a - b });
  var max1 = nums[nums.length - 1];
  var max2 = nums[nums.length - 2];
  var max3 = nums[nums.length - 3];
  var min1 = nums[0];
  var min2 = nums[1];
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};