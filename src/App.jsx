import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    console.log("useEffect starting"); 
    const interval = setInterval(() => { 
      setCount(counter + 1); 
    }, 3000);
    if(running){
      return () => clearInterval(interval); 
    }else{
      clearTimeout(interval);
    }

  
}, [counter, running]); 



  return (
    <>
      <div className="container">
        <button className="button-1" onClick={() => setCount((counter) => counter + 1)}>
          count is {counter}
        </button>
        <button className="resetButton-1" onClick={() => setCount(() => 0)}>
          Reset
        </button>
        <button className="stopButton-1" onClick={() => setRunning(() => false)}>
          Stop
        </button>
        <button className="startButton-1" onClick={() => setRunning(() => true)}>
          Start
        </button>
      </div>
    </>
  )
}

export default App
