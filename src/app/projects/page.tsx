
const projects = [
  { name: 'Monitoring EDF', link: '#', description: 'Application interne pour la centrale du Bugey' },
  { name: 'Blog personnel', link: '#', description: 'Site Next.js avec contenu technique' },
]

export default function ProjectsPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Mes projets</h1>
      <p className="text-muted-foreground">
        Découvrez ici une sélection de mes réalisations professionnelles et personnelles.
      </p>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.name} className="border rounded p-4">
            <h2 className="font-medium">
              <a href={p.link}>{p.name}</a>
            </h2>
            <p className="text-sm text-muted-foreground">{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}