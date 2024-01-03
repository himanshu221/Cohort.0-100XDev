let fs = require("fs")

fs.readFile("file.txt","utf-8",(error, data) => {
    let modData = data.split(" ").reduce((accumulator, curr) => {
        if(curr.length != 0){
            accumulator += " " + curr;
        }
        return accumulator;
    },"").trim()
    
    fs.writeFile("file.txt", modData, () => console.log("Written"))
})

