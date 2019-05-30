var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
    return true;
  }
  for (var i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      continue;
    }
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[i + 1] === 0) {
        flowerbed[0] = 1;
        n--;
        continue;
      }
      if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
        flowerbed[i] = 1;
        n--;
        continue;
      }
      if (flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
        flowerbed[i] = 1;
        n--;
      }
      if (n === 0) {
        return true;
      }
      continue;
    }
  }
  return n === 0;
};