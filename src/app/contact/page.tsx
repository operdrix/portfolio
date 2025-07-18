
export default function ContactPage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="text-muted-foreground">
        N&apos;hésitez pas à me contacter via ce formulaire.
      </p>
      <form className="space-y-4 max-w-md">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nom</label>
          <input
            className="border rounded p-2"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="border rounded p-2"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            className="border rounded p-2"
            id="message"
            name="message"
            required
          />
        </div>
        <button
          className="px-4 py-2 rounded bg-primary text-primary-foreground"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </main>
  )
}