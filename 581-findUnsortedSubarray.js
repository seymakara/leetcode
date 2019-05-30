var findUnsortedSubarray = function (nums) {
  let targetArr = new Array(...nums).sort((x, y) => x - y);
  let start = 0;
  let end = nums.length - 1;

  while (nums[start] === targetArr[start] && start < nums.length) {
    start++;
  }
  if (start === nums.length) return 0;

  while (nums[end] === targetArr[end] && end > start) {
    end--;
  }
  if (end === start) return 0;
  return end - start + 1;

};