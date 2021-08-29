/**
 * @param {character[][]} grid
 * @return {number}
 */

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// https://leetcode.com/problems/number-of-islands/

//Solution 1, BFS and visited nodes
const findAdjacent = (grid, visitedNodes, r, c) => {
  let terrain = 0;
  if (!visitedNodes[`${r},${c}`]) {
    visitedNodes[`${r},${c}`] = 1;
    if (grid[r][c] === "1") {
      terrain += 1;
      //up
      if (r - 1 >= 0) {
        if (!visitedNodes[`${r - 1},${c}`]) {
          terrain += findAdjacent(grid, visitedNodes, r - 1, c);
        }
      }
      //down
      if (r + 1 < grid.length) {
        if (!visitedNodes[`${r + 1},${c}`]) {
          terrain += findAdjacent(grid, visitedNodes, r + 1, c);
        }
      }
      //left
      if (c - 1 >= 0) {
        if (!visitedNodes[`${r},${c - 1}`]) {
          terrain += findAdjacent(grid, visitedNodes, r, c - 1);
        }
      }
      //right
      if (c + 1 < grid[r].length) {
        if (!visitedNodes[`${r},${c + 1}`]) {
          terrain += findAdjacent(grid, visitedNodes, r, c + 1);
        }
      }
    }
  }
  return terrain;
};

var numIslands = function (grid) {
  const visitedNodes = {};
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const num = findAdjacent(grid, visitedNodes, i, j);
      if (num > 0) islands += 1;
    }
  }
  return islands;
};
