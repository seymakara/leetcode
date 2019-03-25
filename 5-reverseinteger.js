var reverse = function (x) {
  let posX = Math.abs(x);
  let reverse = 0;

  while (posX > 0) {
    let remainder = posX % 10;
    reverse = reverse * 10 + remainder;
    posX = Math.floor(posX / 10)
  }

  if (reverse > Math.pow(2, 31)) {
    return 0
  }


  return x > 0 ? reverse : -1 * reverse;
};
