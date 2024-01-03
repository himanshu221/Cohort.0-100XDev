let fs = require("fs");

fs.writeFile("file2.txt","Himanshu Bhushan",function(error){
    console.log("inside write callback")
});

let sum = 0
for(let i =0 ; i < 1000000000; ++i)
    sum += i
console.log(sum)