import React from 'react'
import { accountsInfo } from './api/accounts'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/logo.png"

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
    <div className='h-screen w-full flex items-center justify-center pt-20'>
      <Nav />
      <div className='flex flex-col items-center bg-main p-10 rounded-[2rem] drop-shadow-[0_0_35px_rgba(253,221,232,1)] gap-6'>
        <div className='logo w-fit flex flex-col items-center'>
            <Image src={logo} alt="macaron bakery" className='aspect-square w-24 object-contain'></Image>
            <h2 className='title text-5xl text-center'>Welcome Back</h2>
            <p className='text-lg'>Please enter your details to sign in</p>
        </div>
        
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div className='text-lg flex flex-col gap-2'>
            <p>Email</p>
            <input 
            className='bg-transparent border-2 rounded-xl h-14 pb-3 pt-4 px-5 text-black placeholder-text-white border-grey-500 min-w-96'
            type="email" 
            id='email' 
            placeholder='Enter your email...'
            onChange={(e) => setEmail(e.target.value)} 
            required
            />
          </div>

          <div className='text-lg flex flex-col gap-2'>
            <p>Password</p>
            <input 
            className='bg-transparent border-2 rounded-xl h-14 pb-3 pt-4 px-5 text-black placeholder-text-white border-grey-500 min-w-96'
            type="password" 
            id='password' 
            placeholder='⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁ ⦁'
            onChange={(e) => setPassword(e.target.value)}
            required />
          </div>

          <input type="submit" value="Submit" className='bg-primary rounded-lg h-14 text-xl pt-1' />
          <p className="text-md w-full text-center">Don't have an account yet? <Link href="/signup" className='font-medium'>Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}
