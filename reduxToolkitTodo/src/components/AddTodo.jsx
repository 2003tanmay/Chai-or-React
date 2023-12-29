import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo, updateTodo} from '../features/todo/todoSlice'

const AddTodo = ({editTodoData, isTodoEditable, updateStatus, updateTodoData}) => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    const updateTodoHandler = (e) => {
        e.preventDefault()
        dispatch(updateTodo({id: editTodoData.id, text: input}))
        setInput('')
        updateStatus(false)
        updateTodoData({id: 0, text: ''})
    }

    useEffect(() => {
        if (isTodoEditable) {
            setInput(editTodoData.text)
        }
    }, [editTodoData])

    return (
        <form 
            onSubmit={isTodoEditable ? updateTodoHandler : addTodoHandler} 
            className="space-x-3 mt-12 mb-5 w-full flex justify-center"
        >
            <input
                type="text"
                className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="w-[15%] text-white font-medium bg-indigo-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {isTodoEditable ? "Update Todo" : "Add Todo"}
            </button>
        </form>
    )
}

export default AddTodo
