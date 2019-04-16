var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  let regex = /[a-z0-9]/i;

  while (i < j) {
    if (!regex.test(s[i])) {
      i++;
      continue;
    }
    else if (!regex.test(s[j])) {
      j--;
      continue;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }
  return true;

};