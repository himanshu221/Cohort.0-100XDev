import { useRef } from "react"
import { useSetRecoilState } from "recoil";
import { numberAtom, choiceAtom } from "../store/atoms/input";


export const InputComponent = () => {
    const input = useRef();
    const choice = useRef();
    const setNumber = useSetRecoilState(numberAtom) 
    const setChoice = useSetRecoilState(choiceAtom)

    return (
        <div>
            <input ref={input} type='number' placeholder='0' />
            <select ref={choice} name="generate-types" id="">
                <option value="words">words</option>
                <option value="sentences">sentences</option>
                <option value="paragraphs">paragraphs</option>
            </select>
            <button onClick={() => {
                setNumber(() => input.current.value)
                setChoice(() => choice.current.value)
            }}>Generate</button>
        </div>
    )
    
}