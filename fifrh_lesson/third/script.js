let maxNumber = prompt('Enter max number:');
let startValue = 1;
let endValue = 100;

for (let number = startValue; number <= endValue; number++) {
    let numberToThePower = number**2;
    if (numberToThePower <= maxNumber) {
        console.log(numberToThePower);
    }else{
        break;
    }
}
