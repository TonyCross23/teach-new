import React, { FC, ReactNode } from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

interface GoogleSignInProps {
  children : ReactNode
}

const Google: FC<GoogleSignInProps> = ({children}) => {
  const handelGoogle = async () => {
    await signIn('google', {callbackUrl:"http://localhost:3000/"})
  }
  return (
  <Button className='' variant="destructive" onClick={handelGoogle} style={{ backgroundColor: '#f28b82', color: '#ffffff' }}>
    {children}
  </Button>
  )
}

export default Google
