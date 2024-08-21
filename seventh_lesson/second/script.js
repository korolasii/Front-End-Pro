let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

let sumPositive = array.reduce((acc, x) => x > 0 ? acc + x : acc, 0);
console.log("Sum of the number of positive elements:", sumPositive);

let minElement = Math.min(...array);
let minIndex = array.indexOf(minElement);
console.log("Minimum element:", minElement, "its index:", minIndex);

let maxElement = Math.max(...array);
let maxIndex = array.indexOf(maxElement);
console.log("Maximum element:", maxElement, "its index:", maxIndex);

let negativeCount = array.filter(x => x < 0).length;
console.log("Number of negative elements:", negativeCount);

let oddCount = array.filter(x => x % 2 !== 0).length;
console.log("Number of odd elements:", oddCount);

let positiveEvenCount = array.filter(x => x > 0 && x % 2 === 0).length;
console.log("Number of positive even elements:", positiveEvenCount);

let positiveEvenSum = array.filter(x => x > 0 && x % 2 === 0).reduce((acc, val) => acc + val, 0);
console.log("Sum of positive even elements:", positiveEvenSum);

let positiveOddSum = array.filter(x => x > 0 && x % 2 !== 0).reduce((acc, val) => acc + val, 0);
console.log("Sum of positive odd elements:", positiveOddSum);

let positiveProduct = array.filter(x => x > 0).reduce((acc, val) => acc * val, 1);
console.log("Product of positive elements:", positiveProduct);

let maxAvg = Math.max(...array.map(x => Math.abs(x / 2)));
let newArray = array.map(x => Math.abs(x / 2) === maxAvg ? x : 0);
console.log("Array with the largest average element, others set to zero:", newArray);

