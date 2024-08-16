function average(array = []){
    let sum = 0;
    let count = 0;
    let averageArray = 0;
    for (let i = 0; i < array.length; i++) {

        if (!isNaN(array[i]) && Number.isInteger(Number(array[i]))) {
            sum += Number(array[i]);
            count++;
        }
    }

    averageArray = count > 0 ? sum / count : 0;
    return averageArray
}

let stringToAverage = prompt("Enter data separated by commas(1, 2, 'none', 52): ")
let arrayToAverage = stringToAverage.split(", ")

let resultAverage = average(arrayToAverage);

console.log(resultAverage);

