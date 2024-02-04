const axios = require('axios')

function mainFetch() {
    fetch('https://sum-server.100xdevs.com/todos')
    .then(async (response) => {
        const todo = await response.json()
        console.log(todo.todos.length)
    })
}

async function mainFetchCleaner() {
    const resp = await fetch('https://sum-server.100xdevs.com/todos')
    const todo = await resp.json()
    console.log(todo.todos.length)
}

async function mainAxios() {
    const resp = await axios.get('https://sum-server.100xdevs.com/todos')
    console.log(resp.data.todos.length)
}

async function axiosPost1() {
    const resp = await axios.post('https://httpdump.app/dumps/720604d9-61d7-49f1-a308-23f56b2450c0',
    {
        "username": "himanshu"
    },
    {
        headers : {
            "authorization": "123"
        }
    })
    console.log(axios.data)
}

async function axiosPost2() {
        const resp = await axios(
            {
                url: 'https://httpdump.app/dumps/720604d9-61d7-49f1-a308-23f56b2450c0',
                data : {
                    "username": "himanshu"
                },
                method: "post",
                headers: {
                    "Authorization" : "123"
                }
            })
    console.log(axios.data)
}

mainFetch()
mainFetchCleaner()
mainAxios()
axiosPost2()
