var romanToInt = function (s) {
  roman = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 }
  num = 0

  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      num -= roman[s[i]];
    } else {
      num += roman[s[i]];
    }
  }
  return num;


};