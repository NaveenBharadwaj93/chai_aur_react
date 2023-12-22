import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)
  
  // let counter = 55

  const addValue = () => {
    console.log(`Value added , ${Math.random()} `);
    // counter = counter + 1 
    if (counter < 20) setCounter(counter + 1)
   
    // console.log(`Clicked ${counter}`);
  }

  const removeValue = () => {
    if (counter > 0){setCounter(counter - 1)}
    
  }

  return (
    <>
      <h1> Chai aur react</h1>
      <h2> counter value: {counter}</h2>

      <button 
      onClick={addValue}> Add Value</button>
      <br />
      <button
      onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
