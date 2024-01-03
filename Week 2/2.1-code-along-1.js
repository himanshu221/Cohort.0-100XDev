function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration);
}


// async function using promise
function myOwnSetTimeoutWithPromise(duration){
    return new Promise((resolve) => {
        setTimeout(resolve,duration)   
    })
}

myOwnSetTimeout(() => {
    console.log("Executed my own setTimeout with callback")
}, 5000)
myOwnSetTimeoutWithPromise(5000).then(() => {
    console.log("Executed my own setTimeout with Promise")
})

async function main(){
    await myOwnSetTimeoutWithPromise(5000)
    console.log("Executed my own setTimeout with Async Await")
}
main()