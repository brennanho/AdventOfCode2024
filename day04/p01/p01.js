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
  if (grid[i][j] !== "X") return count;
  // Left to right
  if (j + 3 < grid[0].length && grid[i][j + 1] === "M" && grid[i][j + 2] === "A" && grid[i][j + 3] === "S") count++;
  // Right to left
  if (j - 3 >= 0 && grid[i][j - 1] === "M" && grid[i][j - 2] === "A" && grid[i][j - 3] === "S") count++;
  // Top to down
  if (i + 3 < grid.length && grid[i + 1][j] === "M" && grid[i + 2][j] === "A" && grid[i + 3][j] === "S") count++;
  // Down to top
  if (i - 3 >= 0 && grid[i - 1][j] === "M" && grid[i - 2][j] === "A" && grid[i - 3][j] === "S") count++;
  // Diagonal up right
  if (
    i - 3 >= 0 &&
    j + 3 < grid[0].length &&
    grid[i - 1][j + 1] === "M" &&
    grid[i - 2][j + 2] === "A" &&
    grid[i - 3][j + 3] === "S"
  )
    count++;
  // Diagonal up left
  if (
    i - 3 >= 0 &&
    j - 3 >= 0 &&
    grid[i - 1][j - 1] === "M" &&
    grid[i - 2][j - 2] === "A" &&
    grid[i - 3][j - 3] === "S"
  )
    count++;
  // Diagonal down left
  if (
    i + 3 < grid.length &&
    j - 3 >= 0 &&
    grid[i + 1][j - 1] === "M" &&
    grid[i + 2][j - 2] === "A" &&
    grid[i + 3][j - 3] === "S"
  )
    count++;
  // Diagonal down right
  if (
    i + 3 < grid.length &&
    j + 3 < grid[0].length &&
    grid[i + 1][j + 1] === "M" &&
    grid[i + 2][j + 2] === "A" &&
    grid[i + 3][j + 3] === "S"
  )
    count++;
  return count;
}
