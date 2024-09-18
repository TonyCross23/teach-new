"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type ContextType = {
  loading : boolean,
  setLoading : Dispatch<SetStateAction<boolean>>
}

const initinalState = {
  loading: false,
  setLoading: () => {

  }
}

export const GlobalContext = createContext<ContextType>(initinalState)

export default function GlobalState ({children} : {children: ReactNode}) {
  const [loading, setLoading] = useState(false)

  return (
    <GlobalContext.Provider
    value={{
      loading,
      setLoading
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
