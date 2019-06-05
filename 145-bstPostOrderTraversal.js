// var postorderTraversal = function(root, arr = []) {
//     if (!root) return [];

//     postorderTraversal(root.left, arr);
//     postorderTraversal(root.right, arr);
//     arr.push(root.val);

//     return arr;

// };

//solution II

var postorderTraversal = function (root) {
  if (!root) return [];
  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};
