import { useSetRecoilState } from "recoil";
import { todoAtom } from "../store/todo";
import { useRef } from "react";

export const CreateTodo = () => {
    let key = useRef(0);
    const titleRef = useRef();
    const descRef = useRef();
    const setTodo = useSetRecoilState(todoAtom)
    return (
        <div>
            <input ref={titleRef} type="text" placeholder="Title" />
            <input ref={descRef} type="text" placeholder="Desciption"/>
            <button onClick={() => {
                console.log(key.current)
                setTodo(todo => {
                    return [...todo,{
                        key: ++key.current,
                        title: titleRef.current.value,
                        description: descRef.current.value
                    }]
                })
            }}>Add Todo</button>
        </div>
    )
}