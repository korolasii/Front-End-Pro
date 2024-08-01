const number = prompt("Введіть п'ятизначне число:");


if (number.length === 5 && !isNaN(number)) {
    const digits = number.split('');

    console.log(digits.join(' '));
} else {
    console.log("Будь ласка, введіть коректне п'ятизначне число.");
}