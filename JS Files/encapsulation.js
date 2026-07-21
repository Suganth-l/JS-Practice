class Bank {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(newbalance) {
        this.#balance = newbalance;
    }
}

const b = new Bank(30000);
console.log(b.getBalance());
b.setBalance(25000);
console.log(b.getBalance());