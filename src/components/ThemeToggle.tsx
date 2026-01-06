"use client"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark') {
        document.documentElement.classList.add('dark')
        setIsDark(true)
        return
      }
      if (stored === 'light') {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
        return
      }
      // Respect system preference if not stored
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
      }
    } catch (e) {
      setIsDark(false)
    }
  }, [])

  const toggle = () => {
    try {
      const next = !isDark
      setIsDark(next)
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    } catch (e) {
      // noop
    }
  }

  // During hydration avoid rendering nothing; show a simple icon when known
  return (
    <Button variant="ghost" onClick={toggle} title={isDark ? 'Jasny motyw' : 'Ciemny motyw'}>
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  )
}
