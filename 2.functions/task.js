function getArrayParams(...arr) {
  let avg = arr.reduce((total, amount) => (total + amount / arr.length), 0);
  return { min: Math.min(...arr), max: Math.max(...arr), avg: Number((avg).toFixed(2)) };
}
console.log(getArrayParams(1, 2, 3, -100, 10))

function summElementsWorker(...arr) {
  return arr.reduce((total, amount) => (total + amount), 0)
};

function differenceMaxMinWorker(...arr) {
  let difference = 0;
  if(arr.length > 0) {
    difference += Math.max(...arr) - Math.min(...arr) };
  return difference;
}

function differenceEvenOddWorker(...arr) {
  const sumEvenElement = arr.reduce((total, amount) => {
    if(amount % 2 === 0) {
      total = total + amount;
    }
    return total;
  }, 0);
  const sumOddElement = arr.reduce((total, amount) => {
    if(amount % 2 !== 0) {
      total = total + amount;
    }
    return total;
  }, 0);
  return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {
  const newArr = arr.filter(elem => elem % 2 === 0);
  return newArr.reduce((total, amount) => (total + amount / newArr.length), 0);
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const newArr = arrOfArr.map(elem => elem.reduce((x, y) => x + y));
  if(Math.max(...newArr) > maxWorkerResult) {
    maxWorkerResult = Math.max(...newArr);
    return maxWorkerResult
  }else{
    return Math.max(...newArr)
  }
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr))