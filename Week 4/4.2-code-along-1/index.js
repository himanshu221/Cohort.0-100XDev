const todoContainer = document.querySelector(".bottom-container")
const button = document.querySelector(".add-button");
let counter = 0;

function markDone(id){
    const ele = document.getElementById(id);
    ele.children[2].innerHTML = "Done";
    ele.children[2].style.backgroundColor = "#32a85a";
}
button.addEventListener("click", () =>{
    const todoTitle = document.querySelector(".title-input").value
    const todoDesc = document.querySelector(".description-input").value
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
    btn.className=button.className
    btn.setAttribute("onclick",`markDone(${counter})`)
    const buttonText = document.createTextNode('Mark as Done')
    btn.appendChild(buttonText)

    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(btn);
    div.id=counter;
    counter++;

    todoContainer.appendChild(div);
})