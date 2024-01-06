let arr = [
    {
        name: "Himanshu",
        age: 25
    },
    {
        name: "Snigdha",
        age: 24
    },
    {
        name: "Jagnur",
        age: 24
    }
]

console.log(
    arr.filter(ele => {
        return ele.age == 28
    })
)

let map = new Map();

map.set(1,{
    name: "Himanshu",
    age: 25
})

map.set(2,{
    name: "Snigdha",
    age: 23
})

let iter = map.values();
let res = iter.next();
let list = []
while(!res.done){
    list.push(res.value);
    res = iter.next();
}

let a = {
    name: "Himanshu",
    age: 34
}

console.log(JSON.stringify(a))
console.log(JSON.stringify(list))

let ar = [1,2,3,4];

console.log(Boolean("sx"))


console.log(Date.now())
setTimeout(() => {
    console.log(Date.now())
},1000)