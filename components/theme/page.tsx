"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme()
  return (
    <div className="fixed bottom-4 right-4">
      <button className="bg-white dark:text-white border rounded-full p-2" onClick={ () => setTheme( theme === 'dark' ? 'light' : 'dark')}>
        {
          theme === 'dark' ? <Sun color="#000000"/> : <Moon color="#000000" />
        }
      </button>
    </div>
  )
}

export default ThemeToggle
