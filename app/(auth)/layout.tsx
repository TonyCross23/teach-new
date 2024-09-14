import { FC, ReactNode } from "react"

interface AuthProps {
  children : ReactNode
}

const layout: FC<AuthProps> = ({children}) => {
  return (
    <div className=" container mt-20 justify-center items-center w-[500px] bg-slate-100 p-10 rounded-md">
      {children}
    </div>
  )
} 

export default layout

