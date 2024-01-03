/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelCount = 0;
    for(let ch of str){
      if(vowels.includes(ch)){
        vowelCount++;
      }
    }

    return vowelCount;
}

console.log(countVowels("aesis"))
module.exports = countVowels;