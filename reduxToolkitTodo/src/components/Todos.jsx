import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = ({ updateTodoData, updateStatus }) => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <ul className="list-none w-[66%]">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <div className='flex items-center gap-5'>
                            <button
                                onClick={() => {
                                    updateTodoData(todo)
                                    updateStatus(true)
                                }}
                                className="text-white font-medium bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white font-medium bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
