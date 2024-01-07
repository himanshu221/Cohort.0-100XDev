function getAnimalData(){
    fetch("https://fakerapi.it/api/v1/persons")
    .then((response) => {
        response.json()
        .then((data) => {
            console.log(data)
        })
    })
}

async function getAnimalDataAwait() {
    const response = await fetch("https://fakerapi.it/api/v1/persons")
    const data = await response.json();

    console.log(data)
}