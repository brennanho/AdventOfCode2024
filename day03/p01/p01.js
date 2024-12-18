const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const regex = /mul\((-?\d+),(-?\d+)\)/g;

// Use matchAll to get all matches with capture groups
const matches = [...input.matchAll(regex)]
  .map((match) => Number(match[1]) * Number(match[2]))
  .reduce((acc, num) => acc + num, 0);

console.log(matches);
