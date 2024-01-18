import React, { useState, useMemo, useEffect } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);
    console.log("re-render")

    useEffect(() => {
        setTimeout(() => {
            setItems([...items,{
                name: "ps5", value: 500
            }])
        },5000)
    },[])
    // Your code starts here
    const totalValue = useMemo(() => {
        console.log("in-memo")
        return items.reduce((totalPrice, item) => {
            return totalPrice + item.value;
        },0)
    },[items])
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};

export default Assignment3;