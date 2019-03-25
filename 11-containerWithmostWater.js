var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let tempMaxWater = (right - left) * Math.min(height[left], height[right]);

    if (tempMaxWater >= maxWater) {
      maxWater = tempMaxWater;
    }

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxWater;
};