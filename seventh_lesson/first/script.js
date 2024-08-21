let userInput = prompt("Enter array elements separated by commas (1, 2, 3):");
let array = userInput.split(', ').map(Number);

console.log(array)

let sortedArray = array.sort((a, b) => a - b);
console.log("Sorted array:", sortedArray);

sortedArray.splice(2, 3);
console.log("Array after removing elements 2 through 4", sortedArray);