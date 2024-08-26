let company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }
    ],
    development: {
        web:[
            {
                name: 'Peter',
                salary: 200
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals:[
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
}

let totalSalaries = calculateSalaries(company);
console.log(totalSalaries);