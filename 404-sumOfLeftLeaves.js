var sumOfLeftLeaves = function (root) {
  if (!root) return null;
  if (root.left && !root.left.left && !root.left.right) {
    return root.left.val + sumOfLeftLeaves(root.right)
  }
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};