import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)

    if (!user) return <div className='text-2xl text-center font-semibold m-5 w-full'>Please Login</div>

    return <div className='text-2xl text-center font-semibold m-5 w-full'>Welcome {user.userName}</div>
}

export default Profile
