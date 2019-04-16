var firstUniqChar = function (s) {
  let hash = {};
  for (char of s) {
    char in hash ? hash[char] += 1 : hash[char] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }
  return -1;

};