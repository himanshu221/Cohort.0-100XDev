const button = document.querySelector("button")

// button.addEventListener("click",() => {
//     const a = parseInt(document.querySelector(".input1").value)
//     const b = parseInt(document.querySelector(".input2").value)
//     const sum = a + b;
//     document.querySelector(".output").innerHTML = sum;
// })

button.addEventListener("click",async () => {

    const a = parseInt(document.querySelector(".input1").value)
    const b = parseInt(document.querySelector(".input2").value)
    const sum = await fetch(`https://sum-server.100xdevs.com/sum?a=${a}&b=${b}`)

    document.querySelector(".output").innerHTML = await sum.text();
})