var reverseVowels = function (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let arr = s.split('');
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && !(vowels.includes(arr[i]))) {
      i++;
      // continue;
    }
    while (i < j && !(vowels.includes(arr[j]))) {
      j--;
      // continue;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr.join('')
};