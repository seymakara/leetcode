var myAtoi = function (str) {
  let i = 0;
  let res = 0;
  let isNegative = false;

  // 1. Skip spaces
  while (str[i] === " ") {
    i++
  }

  // 2. Optional +/-
  if (str[i] === '-' || str[i] === '+') {
    str[i] === '-' ? isNegative = true : false
    i++
  }


  // 3. Process numbers and stop once an invalid character is found
  for (; i < str.length; i++) {
    const code = str.charCodeAt(i) - 48;
    if (code < 0 || code > 9) {
      break;
    }
    res *= 10;
    res += code
  }

  if (isNegative) {
    res *= -1;
  }

  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, res));
}