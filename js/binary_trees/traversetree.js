//Binary trees are already defined with this interface:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function bfs(t) {
  const nodes = [t];
  let res = [];
  while (nodes.length > 0) {
    const node = nodes.shift();
    if (node !== null) {
      res.push(node.value);
      nodes.push(node.left);
      nodes.push(node.right);
    }
  }
  return res;
}

//DFS Preorder (Root-Left-Right)
function dfsPreorder(t) {
  const nodes = [t];
  let res = [];
  while (nodes.length > 0) {
    var node = nodes.pop();
    if (node !== null) {
      res.push(node.value);
      nodes.push(node.right);
      nodes.push(node.left);
    }
  }
  return res;
}

// DFS Inorder (Left-Root-Right)
function dfsInorder(node) {
  if (node) {
    const arr = [];
    arr.push(...dfsInorder(node.left));
    arr.push(node.value);
    arr.push(...dfsInorder(node.right));
    return arr;
  }
  return [];
}

// DFS Postorder (Left-Right-Root)
function dfsPostorder(node) {
  if (node) {
    const arr = [];
    arr.push(...dfsPostorder(node.left));
    arr.push(...dfsPostorder(node.right));
    arr.push(node.value);
    return arr;
  }
  return [];
}

/*

     1
    / \
   2   4
  / \ / \
 -  3 5  -

[3,2,4,1,5]



*/

const test = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: null,
    right: null,
  },
};

console.log(bfs(test));
console.log(dfsPreorder(test));
console.log(dfsPostorder(test));
console.log(dfsInorder(test));
