import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/2003tanmay')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='flex flex-row w-full h-screen pb-[50px] pt-3 px-10'>
            <div className='w-1/2'>
                <img className='rounded-full' src={data.avatar_url} alt="Tanmay Pal" />
            </div>
            <div className='w-1/2'>
                <div className='font-bold text-center m-4 bg-gray-100 text-gray-700 p-4 text-3xl rounded hover:bg-gray-200'>
                    {data.name}
                </div>
                <div className='font-semibold text-center m-4 bg-gray-100 text-gray-700 p-4 text-3xl rounded hover:bg-gray-200'>
                    Location: {data.location}
                </div>
                <div className='font-semibold text-center m-4 bg-gray-100 text-gray-700 p-4 text-3xl rounded hover:bg-gray-200'>
                    Repositories: {data.public_repos}
                </div>
                <div className='font-semibold text-center m-4 bg-gray-100 text-gray-700 p-4 text-3xl rounded hover:bg-gray-200'>
                    Github followers: {data.followers}
                </div>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/2003tanmay')
    return response.json()
}
