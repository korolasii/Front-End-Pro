function min(number1, number2){
    if (number1<number2){
        return number1
    }else{
        return number2
    }
}

let number1 = prompt("Enter number 1:");
let number2 =prompt("Enter number 2");

console.log(min(number1, number2))
