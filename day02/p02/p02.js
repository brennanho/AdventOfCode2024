const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const lines = input.split("\n");
const rows = lines.map((line) => line.split(" ").map(Number));

let result = 0;

for (const row of rows) {
  const allRows = getAllRowsFromMainRow(row);
  if (allRows.some(isRowSafe)) result++;
}

console.log(result);

function getAllRowsFromMainRow(row) {
  const allRows = [];
  for (let i = 0; i < row.length; i++) {
    const subRow = [...row];
    subRow.splice(i, 1);
    allRows.push(subRow);
  }
  allRows.push(row);
  return allRows;
}

function isRowSafe(row) {
  if (row[0] === row[1]) return false;
  let goingUp = false;
  if (row[0] < row[1]) goingUp = true;

  for (let i = 1; i < row.length; i++) {
    const difference = row[i] - row[i - 1];
    if (goingUp && !(difference <= 3 && difference >= 1)) return false;
    else if (!goingUp && !(difference >= -3 && difference <= -1)) return false;
  }
  return true;
}
