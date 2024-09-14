import React, { FC, ReactNode } from 'react'
import { Button } from './ui/button'

interface GitHubSignInProps {
  children : ReactNode
}

const GitHub: FC<GitHubSignInProps> = ({children}) => {
  const handelGitHub = () => {
    console.log('login with github');
    
  }
  return (
  <Button className='' onClick={handelGitHub}>
    {children}
  </Button>
  )
}

export default GitHub
