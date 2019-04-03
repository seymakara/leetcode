var groupAnagrams = function (strs) {
  let map = {};
  for (str of strs) {
    let key = [...str].sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
};