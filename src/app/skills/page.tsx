
const skills = [
  'React',
  'Next.js',
  'TailwindCSS',
  'NestJS',
  'Docker',
  'MariaDB',
  'PostgreSQL',
]

export default function SkillsPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Mes compétences</h1>
      <p className="text-muted-foreground">
        Retrouvez ici mes compétences techniques et humaines acquises au fil de mon parcours.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </main>
  )
}