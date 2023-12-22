import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(6)

  // let counter = 6

  const addValue = () => {
    if (counter != 20) {
      setCounter(counter + 1)
      // setCounter(counter + 1) it all update the same counter 6 because react fiber take these
      // setCounter(counter + 1) updation in a batches and useState send this in a batches and  
      // setCounter(counter + 1) react re-render the page only when one event completed so in our
      // setCounter(counter + 1) case onClick event re-render after all the setCounter() so in each
      // setCounter(6 +1) these type of value goes and it update only counter as + 1.

      setCounter((counter) => counter + 1) //when we like to update the same state variable multiple
      setCounter(counter => counter + 1) //times before the next render, instead of passing the next
      setCounter(counter => counter + 1) //state value like setCounter(counter+1) we can pass a next 
      // state based on the previous one in the queue, like setCounter(counter => counter + 1).
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
