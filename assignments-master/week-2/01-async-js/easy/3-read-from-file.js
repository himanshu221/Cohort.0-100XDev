fs = require("fs")

fs.readFile("file.txt", "utf-8", function(error, data){
    console.log(data)
})

let sum = 0;
for(let i = 0; i < 10000000000; ++i)
    sum += i;
console.log(sum)

// const fs = require("fs");

// fs.readFile("file.txt", "utf8" , function(err,data){
//     let newData = (" I am the Super Saiyan "+ data + " ");

//     console.log(newData);
//     modifier(newData);
// });

// function modifier(data){
//     console.log(data.trim());
// }

// fs.readFile("file.txt", "utf8" , function(err,data){
//     console.log(data);
// })
