interface Person {
    name: string
    age: number
    greet(phrase: string) : void
}

class Employee implements Person{
    name: string
    age: number
    employeeID: number

    constructor(name: string, age: number, employeeId: number){
        this.name = name
        this.age =  age
        this.employeeID = employeeId
    }
    greet(phrase: string) {
        console.log(`${phrase}, ${this.name} ${this.employeeID}`)
    }
}

const emp = new Employee("Himanshu", 25, 123)
const gr = emp.greet("Hey")

console.log(gr)