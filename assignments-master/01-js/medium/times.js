/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    console.log()
    console.log("Running for n : "+n)
    let beforeDate = new Date();
    console.log("before time : " + beforeDate.getTime());
    let sum = 0;
    for(let i = 0; i < n; ++i)
    sum += i;
    let afterDate = new Date();
    console.log("after time : " + afterDate.getTime())
    console.log("time elapsed : " + (afterDate-beforeDate)/1000.0 +"sec")
    console.log()

    
}
calculateTime(1000)
calculateTime(1000000)
calculateTime(1000000000)

