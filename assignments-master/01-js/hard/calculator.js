/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(n){
    this.result += n;
  }
  subtract(n){
    this.result -= n;
  }
  multiply(n){
    this.result *= n;
  }
  divide(n){
    if(n == 0)
      throw new Error('Division by 0');
    this.result /= n;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  
  calculate(n){
    try{
      const evaluate = eval(n);
      if(evaluate == Infinity)
        throw new Error('Division by 0');
      this.result = evaluate;
    }catch(e){
      throw new Error('Invalid Expression');
    }
  }
}

// let cal = new Calculator();

// cal.add(10);
// console.log("1 " + cal.getResult())
// console.log("2 " + cal.divide(3))
// console.log("3 " + cal.getResult())
// console.log("4 " + 10/3)

// try {
//   const ev = eval('2 + 3 * 4')
//   console.log("evauluation: " + ev)
// }catch(e){
//   throw e;
// }
module.exports = Calculator;

