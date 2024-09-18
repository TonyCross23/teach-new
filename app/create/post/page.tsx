import CreatePost from '@/components/CreatePost'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)

  if(session?.user) {
    return (
      <div className='container mt-36 py-6 bg-gray-200 dark:bg-black dark:border dark:border-gray-700 rounded-md w-[850px] items-center justify-center'>
        <CreatePost/>
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
