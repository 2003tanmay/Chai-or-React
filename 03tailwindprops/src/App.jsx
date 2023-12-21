import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "tanmay",
    age: 20
  }
  let newArr = [1, 2, 3]

  return (
    <div className='flex justify-center items-center flex-col m-5'>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 text-2xl font-bold px-10'>Tailwind test</h1>
      <div className='flex justify-center items-center flex-row gap-6'>
        <Card username="chaiaurcode" btnText="click me" />
        <Card username="tanmay" />
      </div>
    </div>
  )
}

export default App
