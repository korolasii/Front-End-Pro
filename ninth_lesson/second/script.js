function calculateTotalSalary(obj) {
    let total = 0;

    function recursiveSum(item) {
        if (Array.isArray(item)) {
            item.forEach(element => recursiveSum(element));
        } else if (typeof item === 'object') {
            for (let key in item) {
                if (item[key] && typeof item[key] === 'object') {
                    recursiveSum(item[key]);
                } else if (key === 'salary') {
                    total += item[key];
                }
            }
        }
    }
    
    recursiveSum(obj);
    return total;
}

const data = {
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 600 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 200 },
            { name: 'Alex', salary: 1800 }
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    }
};

console.log(calculateTotalSalary(data));