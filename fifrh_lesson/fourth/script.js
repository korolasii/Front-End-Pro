let number = parseInt(prompt("Enter number:"));

if (number >= 1) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} - is a prime number`);
    } else {
        console.log(`${number} - it is not a prime number`);
    }
} else {
    console.log("The number must be greater than 0");
}