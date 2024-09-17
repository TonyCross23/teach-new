import CreateCategroy from '@/components/CreateCategroy'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  if(session?.user) {
    return (
      <div className='container mt-36 py-6 bg-gray-200 rounded-md w-[850px] items-center justify-center'>
        <CreateCategroy/>
      </div>
    )
  }
  return (
    <div className='container mt-36 py-6 bg-gray-200 rounded-md w-[850px] items-center justify-center'>
      <span className='flex items-center justify-center'>If you want to create blog, please login first</span>
    </div>
  )
}

export default page
