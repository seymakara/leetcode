var compress = function (chars) {
  let count = 1;
  chars.push('end');
  for (let i = 0; i < chars.indexOf('end'); i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
      continue;
    }
    chars.push(chars[i]);
    if (count !== 1) {
      chars.push(...String(count).split(''));
    }
    count = 1;
  }
  chars.splice(0, chars.indexOf('end') + 1)
  return chars.length;
};