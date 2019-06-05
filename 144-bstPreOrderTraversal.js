var preorderTraversal = function (root, arr = []) {
  if (!root) return [];
  arr.push(root.val);
  preorderTraversal(root.left, arr);
  preorderTraversal(root.right, arr);
  return arr;
};

//solution II

// var preorderTraversal = function(root) {
//     if(!root) return [];
//     return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
// };