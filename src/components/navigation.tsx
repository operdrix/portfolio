import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Navigation() {
  return (
    <nav className="p-4 flex gap-4 bg-secondary text-secondary-foreground">
      <Link href="/">Accueil</Link>
      <Link href="/projects">Projets</Link>
      <Link href="/skills">Compétences</Link>
      <Link href="/contact">Contact</Link>
      <ThemeToggle />
    </nav>
  )
}
