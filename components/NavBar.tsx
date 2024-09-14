import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import {Codesandbox} from 'lucide-react'
import Category from './Category'

const NavBar = () => {
  return (
    <div className='bg-slate-50 py-1 border-b border-s-zinc-200 fixed w-full z-10 top-0 '>
      <div className='container flex items-center py-1 justify-between border-b border-gray-200'>
        <Link href={"/"} className='flex flex-row'>
        <Codesandbox size={28} color="#ff0000" strokeWidth={0.5} style={{ marginLeft: '20px' }}/>
        <span className='text-red-500 mt-1'>Teach News</span>
        </Link>
        <Link href={"/sign-in"} className={buttonVariants({ size: 'sm'})}>Log in</Link>
      </div>
        <Category/>
    </div>
  )
}

export default NavBar
