const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")

let timeout;
// logic with debouncing, if input keeps changing within 1sec the sum will not be calculated,
// only when the input doesnt change for a sec is when the sum ( or backend call ) is calculated/made

input1.addEventListener("input",() => {
    clearTimeout(timeout)
    setTimeout(() => {
        const a = parseInt(document.querySelector(".input1").value)
        const b = parseInt(document.querySelector(".input2").value)
        const sum = a+b

        document.querySelector(".output").innerHTML = sum;
    },1000)
})

input2.addEventListener("input",() => {
    clearTimeout(timeout)
    setTimeout(() => {
        const a = parseInt(document.querySelector(".input1").value)
        const b = parseInt(document.querySelector(".input2").value)
        const sum = a+b

        document.querySelector(".output").innerHTML = sum;
    },1000)
})