import React, { FC, ReactNode } from 'react'
import { Button } from './ui/button'
import { signIn } from "next-auth/react"

interface GitHubSignInProps {
  children : ReactNode
}

const GitHub: FC<GitHubSignInProps> = ({children}) => {
  const handelGitHub = async () => {
    await signIn('github', {callbackUrl:"http://localhost:3000/"})
  }
  return (
  <Button className='' onClick={handelGitHub}>
    {children}
  </Button>
  )
}

export default GitHub
