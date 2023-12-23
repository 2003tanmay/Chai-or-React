import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {id} = useParams()
  return (
    <div className='text-center font-bold text-4xl m-20'>
      User: {id}
    </div>
  )
}

export default User
