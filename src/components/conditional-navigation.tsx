'use client'

import { usePathname } from 'next/navigation'
import Navigation from './navigation'

export default function ConditionalNavigation() {
  const pathname = usePathname()
  
  // Don't show navigation on the home page since it's integrated into the page design
  if (pathname === '/') {
    return null
  }
  
  return <Navigation />
}
