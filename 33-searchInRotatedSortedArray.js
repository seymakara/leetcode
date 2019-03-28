var search = function (nums, target) {
  if (!nums) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[start] <= nums[mid]) { // list can have only 2 items
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1
      }

    }

  }
  return -1
};