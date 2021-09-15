const l = [1, [4, [6]]];

const dig = (node, depht) => {
  let maxDepht = depht;
  if (Array.isArray(node) && node.length > 0) {
    for (let item of node) {
      const deepestDig = dig(item, depht + 1);
      if (deepestDig > maxDepht) maxDepht = deepestDig;
    }
  }
  return maxDepht;
};

const sum = (node, weight) => {
  let acc = 0;
  if (Array.isArray(node) && node.length > 0) {
    for (let item of node) {
      acc += sum(item, weight - 1);
    }
  } else acc = node * weight;
  return acc;
};

const solution = (list) => {
  if (list.length === 0) return 0;
  const maxDepht = dig(list, 0);
  return sum(list, maxDepht + 1);
};

console.log(solution(l));
