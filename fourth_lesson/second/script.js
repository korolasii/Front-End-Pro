let numberUser = prompt("Enter your three digit number: "),
    firstDigit = Math.floor(numberUser / 100),
    secondDigit = Math.floor((numberUser / 10) % 10),
    thirdDigit = numberUser % 10;

if (firstDigit === secondDigit && secondDigit === thirdDigit) {
    console.log("All numbers are the same");
}
if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
    console.log("There are same numbers among the digits");
} else {
    console.log("All digits are different");
}

