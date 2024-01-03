//////// 1.5 Asunc, Await and Promises

function findSum(n){
    let ans = 0;

    for(let i = 0; i < n ; ++i)
        ans += i;
    console.log(ans);
}

setTimeout(findSum,1000,100) // this will run after one sec and since it is async flow will not stop and hello world will print first
console.log("Hello World") // This will run first


const fs = require("fs")

fs.readFile("a.txt","utf-8",(error, data) => console.log(data)); // this is async hence execution will not stop, 
console.log("Execution point 1")

let a = 0;
for(let i = 0; i < 1000000000; ++i)
    a += i
console.log("Execution point 2")

////// Output :
// Hello World
// Execution point 1
// Execution point 2
// Hi, my name is Himanshu
// 4950

// When an asynchronous fumnction is called like file read, it will wait for the main thread to complete the global execution and then execute the call back function of file read.

for(let i = 0; i < 5; ++i){
    setTimeout(() => {
        console.log(i)
    },1000)
}

