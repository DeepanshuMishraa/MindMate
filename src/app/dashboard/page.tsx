"use client";

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function page() {
    const {data:session}  = useSession();

  return (
    <div>
      <h1>This Is The Dashboard</h1> 


      {session && <span>{session.user?.name}</span>}


      <button onClick={()=>signOut()} className='rounded-lg bg-red-500 p-2'>Logout</button>   
      </div>
  )
}

export default page
