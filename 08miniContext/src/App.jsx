import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='flex items-center flex-col p-5 w-full h-screen bg-slate-100'>
      <UserContextProvider>
        <h1 className='text-3xl text-center font-bold m-5 border-b-black border-b-2 w-full'>React Context with Chai</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
