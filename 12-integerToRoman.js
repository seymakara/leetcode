var intToRoman = function (num) {
  nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];// these are the roman numeral versions of the numbers in nums list
  romanNum = ""

  for (let i = 0; i < nums.length; i++) {
    while (num - nums[i] >= 0) {
      romanNum += symbols[i];
      num -= nums[i];
    }
  }
  return romanNum;
};