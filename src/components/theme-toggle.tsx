'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark')
    }
  }, [])

  const toggle = () => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', !isDark)
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggle}
      className="ml-auto px-2 py-1 border rounded text-sm"
    >
      {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
    </button>
  )
}
