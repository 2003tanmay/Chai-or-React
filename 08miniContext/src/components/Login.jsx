import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }

    return (
        <div className='flex items-center flex-col w-full'>
            <h2 className='text-2xl text-center font-semibold m-5 w-full'>Login</h2>
            <input
                type="text"
                placeholder='Username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <input
                type="text"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-1/4 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <button 
                onClick={handleSubmit}
                className="md:w-1/4 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
            >Submit</button>
        </div>
    )
}

export default Login
