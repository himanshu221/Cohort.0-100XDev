import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)
  
//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

// function useInterval(callFunc, n) {
//   useEffect(() => {
//     const val = setInterval(callFunc, n) 
//     return () =>  clearInterval(val)
//   },[callFunc, n])
// }
function App() {
  
  return (
      <SearchBar />
  )
}


const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 5000); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
  useEffect(() => {
    console.log("backend request sent")
  },[debouncedValue])

  return (
    <div>
      Debounced value is {debouncedValue}
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

function useDebounce(inputValue, delay){
  const [deboucedValue, setDebouncedValue] = useState(inputValue)
  console.log(1)
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(2)
      setDebouncedValue(inputValue)
    }, delay)
    
    return () => {
      clearInterval(id)
    }
  },[inputValue, delay])
  
  console.log(3)
  return deboucedValue
}

export default App