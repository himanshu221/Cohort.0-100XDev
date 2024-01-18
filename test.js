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

console.log(Boolean({
    _id: "drr",
    name: 'Chikki',
    username: 'snigdha@gmail.com',
    password: '1234',
    __v: 0
  }))


  let trans = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656076800003,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656076800002,
      price: 10,
      category: 'Clothing',
      itemName: 'Shirt',
    }
  ]

let output = trans.reduce((acc, ele) => {
    acc.push(ele.id)
    return acc
},[])

console.log(output)

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}

console.log(ALL_WORDS)
