function promiseEx() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Hello');
        },2000);
    })
}

async function main() {
    let p = await promiseEx();
    console.log(p)

}

main()
console.log("Hello World")