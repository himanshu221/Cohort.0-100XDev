import { useRecoilValue } from "recoil"
import { todoSelector } from "../store/todo"

export const DisplayTodo = () => {
    const filteredTodo = useRecoilValue(todoSelector)
    return <div>
        {filteredTodo.map((todo) => {
            return <div key={todo.key}>
                <h3>{todo.title}</h3>
                <h4>{todo.description}</h4>
            </div>
        })}
    </div>
}