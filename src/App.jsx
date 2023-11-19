import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect starting"); 
    const interval = setInterval(() => { 
      setCount(counter + 1); 
  }, 3000); 

  return () => clearInterval(interval); 
}, [counter]); 


  return (
    <>
      <div className="container">
        <button className="button-1" onClick={() => setCount((counter) => counter + 1)}>
          count is {counter}
        </button>
        <button className="button-1" onClick={() => setCount(() => 0)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
