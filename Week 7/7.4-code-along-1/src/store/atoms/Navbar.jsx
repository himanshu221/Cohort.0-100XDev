import axios from 'axios'
import {atom, selector} from 'recoil'

export const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationAtomSelector",
        get: async () => {
            const resp = await axios.get('https://sum-server.100xdevs.com/notifications')
            return resp.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const count = get(notificationAtom)
        return count.messaging + count.network + count.notifications +  count.jobs
    }
})