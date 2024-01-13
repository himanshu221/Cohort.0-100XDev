import { useState } from "react"


export function CreateTodo(props) {
    let [title, setTitle] = useState("");
    let [desc, setDesc] = useState("");

    return (
        <>
            <input type="text" placeholder="Title" onChange={(e) => {
                console.log(`Title : ${e.target.value}`);
                setTitle(e.target.value);
            }}/>
            <input type="text" placeholder="Description" onChange={(e) => {
                console.log(`Desc : ${e.target.value}`);
                setDesc(e.target.value);
            }}/>
            <button onClick={() => {
                props.setTodos([...props.todos,{
                    title: title,
                    description: desc
                }])
            }}>Add Todo</button>
        </>
    )
}

