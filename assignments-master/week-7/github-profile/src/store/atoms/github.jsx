import { atom, selector } from 'recoil'
import  axios from 'axios'

export const userNameAtom = atom({
    key : "userNameAtom",
    default: "user"
})

export const cardInfo = selector({
    key : "cardInfo",
    get: async ({get}) => {
        const resp = await axios.get(`https://api.github.com/users/${get(userNameAtom)}`)
        return resp.data;
    }
})

