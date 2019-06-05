var getMinimumDifference = function (root) {
  let arr = []
  inorderTraversal(root, arr);
  let min = Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] <= min) {
      min = arr[i + 1] - arr[i]
    }
  }
  return min;
};

var inorderTraversal = function (root, arr) {
  if (!root) return [];
  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
};