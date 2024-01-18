import React, { useState, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
let renderCount = 0;
export function Assignment2() {
    const ref = useRef();
    const [, forceRender] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        ref.current.innerHTML = `This component has rendered ${++renderCount} times`
        forceRender(Math.random());
    };

    return (
        <div>
            <p ref={ref}>This component has rendered 0 times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};