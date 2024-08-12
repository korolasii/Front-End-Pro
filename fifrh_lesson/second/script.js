let startValue = 10;
let endValue = 100;
let dollarExchangeRate = 26;

for (let quantityDollar = startValue; quantityDollar <= endValue; quantityDollar += 10) {
    console.log(`${quantityDollar}$:  ${quantityDollar*dollarExchangeRate}`)
}