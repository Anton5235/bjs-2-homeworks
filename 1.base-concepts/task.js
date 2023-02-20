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
    console.log("Первый параметр не является числом!")
  };
  if(isNaN(contribution)) {
    console.log("Второй параметр не является числом!")
  };
  if(isNaN(amount)) {
    console.log("Третий параметр не является числом!")
  };
}