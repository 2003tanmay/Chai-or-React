import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(6)

  // let counter = 6

  const addValue = () => {
    if (counter != 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter != 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
