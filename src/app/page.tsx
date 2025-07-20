import About from './_sections/About';
import Contact from './_sections/Contact';
import Experience from './_sections/Experience';
import Hero from './_sections/Hero';
import Projects from './_sections/Projects';
import Skills from './_sections/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
