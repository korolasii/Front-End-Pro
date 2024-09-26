class BankAccount {
    #balance

    constructor(balance) {
        this.#balance = balance 
    }

    getBalance(){
        return this.#balance
    }

    deposit(sumForDep){
        this.#balance+=sumForDep
    }

    withdraw(sumForWith){
        this.#balance-=sumForWith
    }
    
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300