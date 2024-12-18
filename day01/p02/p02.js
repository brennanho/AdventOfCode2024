const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const inputPerLine = input.split("\n");

const lhs = inputPerLine.map((row) => parseInt(row.split("   ")[0]));
const rhs = inputPerLine.map((row) => parseInt(row.split("   ")[1]));

const rhsDictCount = {};
for (const num of rhs) {
    if (num in rhsDictCount) rhsDictCount[num] += 1;
    else rhsDictCount[num] = 1;
}

let result = 0;
for (const num of lhs) {
    result += (parseInt(num) * (rhsDictCount[num] || 0)); 
}

console.log(result);