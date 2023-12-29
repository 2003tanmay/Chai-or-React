import React, { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  const [editData, setEditData] = useState({id: 0, text: ''})
  const [isTodoEditable, setIsTodoEditable] = useState(false)

  const updateTodoData = (data) => {
    setEditData({...data, id: data.id, text: data.text});
  }

  const updateStatus = (status) => {
    setIsTodoEditable(status)
  }

  // useEffect(() => {
  //   if (isTodoEditable) {
  //       console.log(editData)
  //   }
  // })

  return (
    <div className='flex flex-col items-center bg-gray-400 w-full h-screen p-5'>
      <h1 className='w-full text-3xl font-bold shadow-0 text-center'>To Do List</h1>
      <AddTodo 
        editTodoData={editData}
        isTodoEditable={isTodoEditable}
        updateStatus={updateStatus}
        updateTodoData={updateTodoData}
      />
      <Todos 
        updateTodoData={updateTodoData}
        updateStatus={updateStatus}
      />
    </div>
  )
}

export default App
