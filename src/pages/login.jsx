import React from 'react'
import { accountsInfo } from './api/accounts'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'

export default function login(){
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    async function onSubmit(event) {
        event.preventDefault()

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

        if (!response.ok){
            console.error("Failed to log in")
        }
        else {
            // Handle response if necessary
            console.log("Login successful")
            
        }
    }



  return (
    <div className='h-screen w-full flex items-center justif-center'>
        <form onSubmit={onSubmit}>
            <p>Username/Email</p>
            <input 
            type="email" 
            id='email' 
            onChange={(e) => setEmail(e.target.value)} 
            required
            />

            <p>Password</p>
            <input 
            type="password" 
            id='password' 
            onChange={(e) => setPassword(e.target.value)}
            required />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
