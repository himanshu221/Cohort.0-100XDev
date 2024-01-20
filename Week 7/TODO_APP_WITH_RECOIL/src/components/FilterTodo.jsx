import { useSetRecoilState } from "recoil"
import { filterInputAtom } from "../store/todo"

export const FilterTodo = () => {
    const setFilter = useSetRecoilState(filterInputAtom)
    return (
        <div>
            <input type="text" placeholder="filter" onChange={(e) =>{
                setFilter(e.target.value)
            }}/>
        </div>
    )
}