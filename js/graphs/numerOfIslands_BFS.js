/**
 * @param {character[][]} grid
 * @return {number}
 */

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// https://leetcode.com/problems/number-of-islands/

const findAdjacent = (grid, row, col, visitedCells) => {
  const queue = [];
  queue.push([row, col]);
  let terrain = 0;
  while (queue.length > 0) {
    const [r, c] = queue.shift();
    if (!visitedCells[`${r},${c}`]) {
      visitedCells[`${r},${c}`] = 1;
      if (grid[r][c] === "1") {
        terrain += 1;
        //up
        if (r - 1 >= 0 && !visitedCells[`${r - 1},${c}`]) {
          queue.push([r - 1, c]);
        }
        //down
        if (r + 1 < grid.length && !visitedCells[`${r + 1},${c}`]) {
          queue.push([r + 1, c]);
        }
        //left
        if (c - 1 >= 0 && !visitedCells[`${r},${c - 1}`]) {
          queue.push([r, c - 1]);
        }
        //right
        if (c + 1 < grid[r].length && !visitedCells[`${r},${c + 1}`]) {
          queue.push([r, c + 1]);
        }
      }
    }
  }
  return terrain;
};

var numIslands = function (grid) {
  const visitedCells = {};
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (findAdjacent(grid, i, j, visitedCells) > 0) islands += 1;
    }
  }
  return islands;
};
