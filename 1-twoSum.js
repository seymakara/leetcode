var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in hashMap) {
      return [hashMap[complement], i]
    } else {
      hashMap[nums[i]] = i;
    }
  }
};