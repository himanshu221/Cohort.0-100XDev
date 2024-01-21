import { atomFamily} from 'recoil'
import { todos } from '../../todos'

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id => {
            return todos.find(x => x.id === id);
        }
})