var levelOrderBottom = function (root) {
  const r = [];
  const levelOrder = (node, level = 0) => {
    if (node) {
      r[level] = r[level] || [];
      r[level].push(node.val);
      if (node.left) levelOrder(node.left, level + 1);
      if (node.right) levelOrder(node.right, level + 1);
    }
  }
  levelOrder(root);

  return r.reverse();
};