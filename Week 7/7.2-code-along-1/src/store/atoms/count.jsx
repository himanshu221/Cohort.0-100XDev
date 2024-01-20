import {atom, selector} from 'recoil'
export const countAtom = atom({
    key: "CounterAtom",
    default: 0
})

export const EvenSelector = selector({
    key: "EvenSelector",
    get: ({get}) => {
        const count = get(countAtom)
        return count%2;
    }
})