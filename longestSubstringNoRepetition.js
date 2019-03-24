var lengthOfLongestSubstring = function (s) {
  let hashMap = {};
  let max = 0;
  let i = 0;
  while (i < s.length) {
    j = i
    hashMap = {};
    while (j < s.length) {
      if (!(s[j] in hashMap)) {
        hashMap[s[j]] = j;
        j++;
      } else {
        i = hashMap[s[j]];
        break;
      }
    }
    i++;
    if (Object.keys(hashMap).length > max) {
      max = Object.keys(hashMap).length;
    }
  }
  return max;

};