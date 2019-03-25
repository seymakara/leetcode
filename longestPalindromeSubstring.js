var longestPalindrome = function (s) {
  if (!s) return "";
  if (s.length === 1) return s[0];
  if (isPalindrome(s)) return s;
  let maxLength = 0;
  let longestPalindrome = s[0];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let subPalindrome = s.substring(i, j + 1)
      if (isPalindrome(subPalindrome) && subPalindrome.length > maxLength) {
        maxLength = subPalindrome.length;
        longestPalindrome = subPalindrome;
      }
    }
  }
  return longestPalindrome;
};

var isPalindrome = (s) => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}