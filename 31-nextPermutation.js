var nextPermutation = function (nums) {
  let pivot = findPivot(nums) - 1 //pivot is the element just before the non-increasing (weakly decreasing) suffix
  if (pivot !== -1) { //if pivot is non-existent then it will be -1.
    let nextGreater = greaterSuccessorOfPivot(nums, pivot);
    swap(nums, pivot, nextGreater)
  }
  reverse(nums, pivot + 1);

};

const findPivot = (nums) => {
  let last = nums.length - 1;
  while (last > 0) {
    if (nums[last] > nums[last - 1]) return last;
    last--;
  }
  return 0;
}

const greaterSuccessorOfPivot = (nums, pivot) => {
  let last = nums.length - 1;
  while (last >= 0) {
    if (nums[last] > nums[pivot]) {
      return last;
    }
    last--
  }
  return -1;
}

const reverse = (nums, first) => {
  let last = nums.length - 1;
  while (first < last) {
    swap(nums, first, last);
    first++;
    last--;
  }
}

const swap = (nums, i, j) => {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}