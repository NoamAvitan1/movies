import React from 'react'
import { useIteration } from './Iteration'

export default function Test(){
    const [userList, current, loading,next,previous] = useIteration(
        'https://randomuser.me/api/'
    );
  return (
    <div className='h-[400px] bg-white'>
        <p>
            All users :
            {userList.length > 0 && current && userList.map((user,i) => (
                user.name === current.name ?
                <b className='font-bold' key={i}>{user.name}</b> :
                <span key={i}>{user.name}</span>
            ))}
        </p>
        {loading ? <p>Loading...</p> : 
        current &&
        <div>
        <p>Current user : {current.name}</p>    
        </div>}
        <button className='bg-black p-4 m-2 text-white' onClick={()=>next()}>next</button>
        <button className='bg-black p-4 m-2 text-white' onClick={()=>previous()}>previous</button>
    </div>
  )
}
