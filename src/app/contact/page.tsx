'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

const contact = () => {
    const route = useRouter()
  return (
   <div> Contact


        <br/>
        
        <button onClick={()=>route.push('/')}>Go To Home </button>
    </div>
  )
}

export default contact