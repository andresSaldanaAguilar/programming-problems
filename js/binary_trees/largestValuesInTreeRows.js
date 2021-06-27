//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function largestValuesInTreeRows(t) {
  const res = [];
  const nodes = [t];
  let row = [];
  let n = 1;
  // BFS
  while (nodes.length > 0) {
    const node = nodes.shift();
    if (node !== null) {
      row.push(node.value);
      nodes.push(node.left);
      nodes.push(node.right);
    } else {
      n = n - 1;
    }
    if (row.length === n && row.length > 0) {
      res.push(Math.max(...row));
      row = [];
      n = n * 2;
    }
  }
  return res;
}
