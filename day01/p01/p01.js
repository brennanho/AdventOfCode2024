const fs = require("fs");

const input = fs.readFileSync("p01Input.txt", "utf-8");

const inputPerLine = input.split("\n");

const lhs = inputPerLine.map((row) => parseInt(row.split("   ")[0]));
const rhs = inputPerLine.map((row) => parseInt(row.split("   ")[1]));

const lhsSorted = lhs.sort();
const rhsSorted = rhs.sort();

let result = 0;
for (let i = 0; i < lhsSorted.length; i++) {
  result += Math.abs(lhsSorted[i] - rhsSorted[i]);
}

console.log(result);