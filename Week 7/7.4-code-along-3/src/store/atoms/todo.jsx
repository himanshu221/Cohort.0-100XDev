import { atomFamily, selectorFamily } from 'recoil'
import axios from 'axios'

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: selectorFamily({
        key: "todoAtomSelectorFamily",
        get: id => async() => {
            const resp = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return resp.data.todo
        }
    })
})