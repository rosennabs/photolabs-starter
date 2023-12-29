const arrayNum = [1, 2, 3, 4, 5];

const sumArray = arrayNum.reduce((acc, num) => {
  acc += num;
  return acc;
}, 0)

console.log(sumArray);