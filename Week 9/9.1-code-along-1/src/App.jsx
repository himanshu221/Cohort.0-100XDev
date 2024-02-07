import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const [mount, setMount] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setMount(false)
    },5000)
  })
  return (
    <>
      { mount ? <MyComponent /> : <div></div> }
    </>
  )
}

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("component mounted")
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("component unmounted")
//     };
//   }, []);

//   // Render UI
//   return <div>
//     Hi there
//   </div>
// }

class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component mounted")
  }
  
  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("component unmounted")
  }

  render() {
    // Render UI
    return <div>
         Hi there
       </div>
  }
}

export default App
