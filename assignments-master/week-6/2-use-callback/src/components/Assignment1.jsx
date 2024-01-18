import { useCallback } from "react";
import {memo, useState } from "react";


// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);

    console.log("re-render")
    // Your code starts here
    const handleIncrement = useCallback(() => {
        console.log("inside increment")
        setCount(count => count + 1)
    },[])

    const handleDecrement = useCallback(() => {
        console.log("inside decrement")
        setCount(count => count - 1)
    },[])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Counter : {counter}</button>
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
    console.log("custom button re-rendered")
    return <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
})
