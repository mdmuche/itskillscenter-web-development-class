//? key oop concepts
// 1. class
class Person {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    greet() {
        console.log(`Hello my name is ${this.name} i am ${this.age}Yrs old and i am a salary earner with a monthly take home of ${this.salary}Cad`)
    }
}

const person1 = new Person('Abula Martins Onyemuche', 29, 10000);
// console.log(person1);

// 2. Object
// object is an instance of a class
const teacher = new Person('Adedeji Ayomide', 32, 5000);
// console.log(teacher);

// 3. Constructor
// constructor(name, age, maritalStatus, salary) {
//     this.name = name;
//     this.age = age;
// }

// 3. Method

// 4. Inheritance
class Employee extends Person {
    constructor(name, age, salary, position, id){
       super(name, age, salary);
       this.position = position;
       this.id = id;
    }

    work () {
        console.log(`${this.name} is working at ${this.position} and has the ${this.id} Permit to work`)
    }
}

const chevronWorker = new Employee('Dagogo Bright', 28, 8000, 'rig wing', 'CH3456YR');
// chevronWorker.work();

// 5. Encapsulation
class BankAccount {
    #balance = 0;

    deposit(amount) {
        if(amount > 0){
          this.#balance += amount;
          console.log(`${amount} Deposited`)
        }
    }

    withdrawal(amount) {
        if(this.#balance > amount && amount > 0) {
            this.#balance -= amount;
            console.log(`${amount} widthdrew`)
        } else {
            console.log('Insufficient funds');
        }
    }

    getBalance() {
        console.log(`your balance is: $${this.#balance}`);
    }
}

const mucheBankAccount = new BankAccount();
// mucheBankAccount.withdrawal(3000);
// mucheBankAccount.deposit(3000);
// mucheBankAccount.withdrawal(1000);
// mucheBankAccount.getBalance();