var findMode = function (root) {
  let hash = {};
  let res = [];
  let max = -Infinity;

  if (!root) return res;

  const traverse = (node) => {
    hash[node.val] ? hash[node.val] += 1 : hash[node.val] = 1;
    if (node.left) { traverse(node.left) };
    if (node.right) { traverse(node.right) };
  }
  traverse(root);

  for (key in hash) {
    if (hash[key] >= max) {
      max = hash[key];
    }
  }

  for (key in hash) {
    if (hash[key] >= max) {
      res.push(key);
    }
  }
  return res;
};