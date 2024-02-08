function greet(name: string){
    console.log(`Hello ${name}`)
}

function sum(a: number, b: number): number{
    return a + b;
}
// this will work as well as ts has type inference
// function sum(a: number, b: number){
//     return a + b;
// }

function isLegal(age: number) {
    return age > 18
}

function runFunc(fn: () => void) {
    setTimeout(fn, 1000)
}

interface User {
    firstname: string,
    lastname: string,
    age: number,
    email ?: string
}

function isLegalUser(user: User){
    return user.age > 18
}

const islegal = isLegalUser({
    firstname: "Himanshu",
    lastname: "Bhushan",
    age: 29
})

console.log(islegal)
const ret: number = sum(2,4)
console.log(ret)
console.log(isLegal(34))
greet("Himanshu")
runFunc(() => console.log("Hello"))