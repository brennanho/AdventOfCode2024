const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");
const [orderingsStr, updatesStr] = input.split("\n\n");

const orderings = orderingsStr.split("\n").map((orderingStr) => {
  const [firstNum, secondNum] = orderingStr.split("|");
  return [Number(firstNum), Number(secondNum)];
});
const updates = updatesStr.split("\n").map((updateStr) => updateStr.split(",").map(Number));

const orderingsMap = {};
for (const [firstNum, secondNum] of orderings) {
  if (!orderingsMap[firstNum]) orderingsMap[firstNum] = { before: new Set(), after: new Set() };
  if (!orderingsMap[secondNum]) orderingsMap[secondNum] = { before: new Set(), after: new Set() };
  orderingsMap[firstNum].after.add(secondNum);
  orderingsMap[secondNum].before.add(firstNum);
}

let result = 0;
for (const update of updates) {
    if (isValidUpdate(update, orderingsMap)) {
        const num = update[Math.floor(update.length / 2)];
        result += num;
    }
}
console.log(result);

function isValidUpdate(update, orderingsMap) {
  for (let i = 0; i < update.length; i++) {
    const beforePages = update.slice(0, i);
    const afterPages = update.slice(i + 1);
    const currentPage = update[i];

    for (const page of beforePages) {
      if (!orderingsMap?.[currentPage].before.has(page)) return false;
    }
    for (const page of afterPages) {
      if (!orderingsMap?.[currentPage].after.has(page)) return false;
    }
  }
  return true;
}
