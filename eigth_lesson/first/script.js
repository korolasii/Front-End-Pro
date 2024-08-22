function createSum() {
    let total = 0;

    return function(value) {
        total += value;
        return total;
    }
}

const sum = createSum();

console.log(sum(4));  
console.log(sum(6));  
console.log(sum(10)); 
console.log(sum(7));  