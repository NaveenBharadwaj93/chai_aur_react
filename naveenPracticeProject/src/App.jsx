import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,counterSet] = useState(0) // use statre hook pass the value of the counter to the DOM created by react..
  // let counter = 0

  function incrementCounter() {
    if (counter < 100){
    counterSet(counter + 1)
    }
    console.log(`incremented counter value: ${counter}`);
    return counter
  }

  function decrementCounter() {
    if (counter > 0){
    counterSet(counter - 1)
    }
    console.log(`decremented counter value: ${counter}`);
    return counter
  }

  return (
    <>
      <div>
      <img src={viteLogo} alt="" /> 
      <br /><br />
      <img src={reactLogo} alt="" />
      <h1>Counter count is: {counter}</h1>
      <hr /><br />
      <button 
      onClick={incrementCounter}>Increment counter</button>
      <br /><br /><hr /><br />
      <button
      onClick={decrementCounter}>Decrement counter</button>
      <br /><br /><hr />
    </div>
    </>
  )
}

export default App
