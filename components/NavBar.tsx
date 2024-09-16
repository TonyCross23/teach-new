import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import {Codesandbox, Plus} from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import NavLogout from './NavLogout'
import DropDownProfile from './DropDownProfile'

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (
    <div className='bg-slate-50 py-1 border-b border-s-zinc-200 fixed w-full z-10 top-0 '>
      <div className='container flex items-center py-1 justify-between border-b border-gray-200'>
        <Link href={"/"} className='flex flex-row'>
        <Codesandbox size={28} color="#ff0000" strokeWidth={0.5} style={{ marginLeft: '20px' }}/>
        <span className='text-red-500 mt-1'>Teach News</span>
        </Link>
        <div className='flex flex-row gap-3'> 
        
        {session?.user ? (
           <DropDownProfile/>
        ):(
          <Link href={"/sign-in"} className={buttonVariants({ size: 'sm'})}>Log in</Link>
        )}
        </div>
      </div>
        {/*<Category/>*/}
    </div>
  )
}

export default NavBar
