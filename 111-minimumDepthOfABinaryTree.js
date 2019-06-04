var minDepth = function (root) {
  if (!root) return 0;
  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
  }
  else {
    return 1 + Math.max(minDepth(root.left), minDepth(root.right))
  }
};