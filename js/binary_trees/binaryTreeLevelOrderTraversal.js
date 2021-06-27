/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  let level = [];
  const nodes = [root];
  let n = 1;

  while (nodes.length > 0) {
    const node = nodes.shift();
    if (node) {
      level.push(node.val);
      nodes.push(node.left);
      nodes.push(node.right);
    } else n -= 1;
    if (level.length == n && n > 0) {
      res.push(level);
      level = [];
      n *= 2;
    }
  }
  return res;
};
