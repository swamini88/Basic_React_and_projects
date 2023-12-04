import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data)
//             setData(data)
//         } 
//             )
// },[])
  return (
    <>
    <div className='bg-gray-600 text-center text-3xl p-4 text-white'>Github followers:{data.followers}</div>
    <img className=' bg-gray-600' src={data.avatar_url} alt="profile picture"width={300} />
    </>
  )
}

export default Github

export const githubInfoLoader= async() => {
    const res =  await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return res.json()

}