import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [counter, setCounter] = useState(15)
  let [counter, setCounter] = useState(15)                               
  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1
    if (counter > 30) {
      counter = 30
      setCounter(counter)
    } else {
      setCounter(counter)
    }
  }
  const removeValue = () => {
    console.log("clicked", counter);
    counter = counter - 1
    if (counter < 0) {
      counter = 0
      setCounter(counter)
    } else {
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Mohammad Adnan React !!</h1>
      <h2>Counter value :  {counter}</h2>            {/*  value of counter is not changing here we neeed the help of hook */}
      <button
        onClick={addValue}
      >Add value till 20 :  {counter}</button><br />
      <button
        onClick={removeValue}
      >Remove value value till 0 :{counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App;
