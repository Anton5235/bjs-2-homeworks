"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  let root;
  if(discriminant === 0) {
    root = -b / (2 * a);
    arr.push(root)
  } else if(discriminant > 0) {
    root = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
    arr.push(root, root2)
  }
  return arr;
}
console.log(solveEquation(1,2,3))


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent)) {
    return false;
  } ;
  if(isNaN(contribution)) {
    return false;
  };
  if(isNaN(amount)) {
    return false;
  };
  const s = amount - contribution;
  const p = (percent / 100) / 12;
  const monthPay = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  const finalPay = Number((monthPay * countMonths).toFixed(2));
  return finalPay}
console.log(calculateTotalMortgage(15, 0, 10000, 36));
