var trap = function (arr) {
  let left = 0;
  let right = 0;
  let water = 0;
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    left = Math.max(left, arr[i]);
    right = Math.max(right, arr[j]);
    if (left <= right) {
      water += left - arr[i];
      i += 1
    } else {
      water += right - arr[j];
      j -= 1
    }

  }
  return water;

};