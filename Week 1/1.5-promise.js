const fs = require("fs")

function readFile() {
    return new Promise(function(resolve, reject){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}
function onDone(data){
    console.log(data);
}
readFile().then(onDone);

// readFile returns an instance of promsie and whenever that promise resolves
// it passes the execution to the function defined in .then() which is in our case 'onDone'


function promiseEx() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Hello');
        },2000);
    })
}

let p = promiseEx();

console.log(p)
p.then((data) => {
    console.log(data);
})