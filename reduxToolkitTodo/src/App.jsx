import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='flex flex-col items-center bg-gray-400 w-full h-screen p-5'>
      <h1 className='w-full text-3xl font-bold shadow-0 text-center'>To Do List</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
