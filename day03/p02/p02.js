const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const regex = /(mul\((-?\d+),(-?\d+)\))|(do\(\))|(don't\(\))/g;

// Use matchAll to get all matches with capture groups
const matches = [...input.matchAll(regex)].map((match) => match[0]);

let performOp = true;
let result = 0;
for (let op of matches) {
  if (op === "do()") performOp = true;
  else if (op === "don't()") performOp = false;
  else if (performOp) result += mult(op);
}
console.log(result);

function mult(str) {
  const firstNum = str.split("mul(")[1].split(',')[0];
  const secondNum = str.split("mul(")[1].split(',')[1].split(')')[0];
  return Number(firstNum) * Number(secondNum);
}
