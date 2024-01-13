import { useState } from "react"

export function Button(){
    let [state, setState] = useState("Mark as Complete");

    return <button onClick={() => {
        setState("Completed")
    }}>{state}</button>
}