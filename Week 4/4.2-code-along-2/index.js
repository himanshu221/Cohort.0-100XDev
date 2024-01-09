const todoContainer = document.querySelector(".bottom-container")
let counter = 0;
function markDone(id){
    const ele = document.getElementById(id);
    ele.children[2].innerHTML = "Done";
    ele.children[2].style.backgroundColor = "#32a85a";
}

function addTodo(todoTitle, todoDesc){
    const div = document.createElement("div");
    div.setAttribute("style","padding: 40px;box-shadow: 0px 0px 5px rgba(0,0,0,0.30);border-radius: 5px;text-align: center");


    const title = document.createElement("p");
    title.setAttribute("style","font-size: 15px")
    const titleText = document.createTextNode(todoTitle)
    title.appendChild(titleText)

    const desc = document.createElement("p");
    desc.setAttribute("style","font-size: 15px")
    const descText = document.createTextNode(todoDesc)
    desc.appendChild(descText)
    
    const btn = document.createElement("button");
    btn.className="add-button"
    btn.setAttribute("onclick",`markDone(${counter})`)
    const buttonText = document.createTextNode('Mark as Done')
    btn.appendChild(buttonText)

    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(btn);
    div.id=counter;
    counter++;

    todoContainer.appendChild(div);
}

function updateDomBasedOnState(state){
    for(let todo of state.todos){
        addTodo(todo.title, todo.description);
    }
} 
setInterval(async () => {
    todoContainer.innerHTML = ""
    const resp = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await resp.json();
    // what this functioin is doing is what react does for us, we just provide the curreny state we need to render to the UI
    // and react renders it for us and behind the scenes it also does the DOM manupulations only
    updateDomBasedOnState(json)
}, 5000)


updateStateInInterval()