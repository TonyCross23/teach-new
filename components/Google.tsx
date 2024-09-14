import React, { FC, ReactNode } from 'react'
import { Button } from './ui/button'

interface GoogleSignInProps {
  children : ReactNode
}

const Google: FC<GoogleSignInProps> = ({children}) => {
  const handelGoogle = () => {
    console.log('login with googel');
    
  }
  return (
  <Button className='' variant="destructive" onClick={handelGoogle} style={{ backgroundColor: '#f28b82', color: '#ffffff' }}>
    {children}
  </Button>
  )
}

export default Google
