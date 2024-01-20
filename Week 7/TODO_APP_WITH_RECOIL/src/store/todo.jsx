import {atom, selector} from 'recoil'

export const todoAtom = atom({
    key: 'todoAtom',
    default: [{
        key: 0,
        title: 'Gym',
        description: '7-9pm'
    }]
})

export const filterInputAtom = atom({
    key: "filterInputAtom",
    default: "",
})

export const todoSelector = selector({
    key: 'todoSelector',
    get: ({get}) => {
        const todos = get(todoAtom)
        const filter = get(filterInputAtom)

        return todos.filter(todo => todo.title.includes(filter) || 
            todo.description.includes(filter))
    }
})