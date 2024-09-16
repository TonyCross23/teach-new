"use client";
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react';

const NavLogout = () => {
  return (
    <Button className='w-full' onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`
    })} variant="destructive">
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  )
}

export default NavLogout
