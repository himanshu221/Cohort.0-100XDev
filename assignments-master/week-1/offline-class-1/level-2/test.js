// Callbacks
const square = n => {
    return n*n;
}
const cube = n => {
    return n*n*n;
}
const sumOfSquare = (n1,n2,fn) => {
    const sq1 = fn(n1);
    const sq2 = fn(n2);
    return sq1 + sq2;
}

console.log(sumOfSquare(2,3,square))
console.log(sumOfSquare(2,3,cube))