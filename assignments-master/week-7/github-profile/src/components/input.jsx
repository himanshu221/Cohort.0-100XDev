import { useSetRecoilState } from 'recoil'
import { userNameAtom } from '../store/atoms/github'
import { useRef } from 'react'

export const InputComponent = () => {
    const input = useRef()
    const setUserName = useSetRecoilState(userNameAtom)

    return (
        <div>
            <input ref={input} type="text" placeholder="Github Username" />
            <button onClick={() => {
                setUserName(() => input.current.value)
            }}>Generate Profile Card</button>
        </div>
    )
}