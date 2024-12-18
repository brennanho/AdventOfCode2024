const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");
const grid = input.split("\n");

let result = 0;
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    const count = getXmasCount(grid, i, j);
    result += count;
  }
}
console.log(result);

function getXmasCount(grid, i, j) {
  let count = 0;
  if (grid[i][j] !== "A" || i - 1 < 0 || i + 1 >= grid.length || j - 1 < 0 || j + 1 >= grid[0].length) return count;

  /**
   * m   s
   *   a
   * m   s
   */
  if (grid[i - 1][j - 1] === "M" && grid[i - 1][j + 1] === "S")
    if (grid[i + 1][j - 1] === "M" && grid[i + 1][j + 1] === "S") count++;

  /**
   * s   s
   *   a
   * m   m
   */
  if (grid[i - 1][j - 1] === "S" && grid[i - 1][j + 1] === "S")
    if (grid[i + 1][j - 1] === "M" && grid[i + 1][j + 1] === "M") count++;

  /**
   * s   m
   *   a
   * s   m
   */
  if (grid[i - 1][j - 1] === "S" && grid[i - 1][j + 1] === "M")
    if (grid[i + 1][j - 1] === "S" && grid[i + 1][j + 1] === "M") count++;

  /**
   * m   m
   *   a
   * s   s
   */
  if (grid[i - 1][j - 1] === "M" && grid[i - 1][j + 1] === "M")
    if (grid[i + 1][j - 1] === "S" && grid[i + 1][j + 1] === "S") count++;

  return count;
}
