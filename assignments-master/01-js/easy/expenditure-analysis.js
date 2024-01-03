/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   let output = [];

//   for(let transaction of transactions){
//     let foundCat = false;
//     for(let i in output){
//       if(output[i].category == transaction.category){
//         foundCat = true;
//         output[i].totalSpent += transaction.price;
//       }
//     }
//     if(!foundCat){
//       output.push({
//         category: transaction.category,
//         totalSpent: transaction.price
//       })
//     }

//   }
  
//   return output;
// }


function calculateTotalSpentByCategory(transactions) {
  let output = {};

  for(let transaction of transactions){
      if(output.hasOwnProperty(transaction.category)){
        output[transaction.category] += transaction.price;
      }else{
        output[transaction.category] = transaction.price;
      }
  }
  
  return Object.keys(output).map(ele => {
    return {category: ele, totalSpent: output[ele]}
  });
}

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

console.log(calculateTotalSpentByCategory(trans))

module.exports = calculateTotalSpentByCategory;
