
export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <p>N&apos;hésitez pas à me contacter via ce formulaire.</p>
      <form>
        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
} 