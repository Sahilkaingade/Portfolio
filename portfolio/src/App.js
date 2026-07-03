import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    <Header />
    <section id="home">
  <Hero />
</section>

<section id="about">
  <About />
</section>

<section id="skills">
  <Skills />
</section>

<section id="projects">
  <Projects />
</section>

<section id="experience">
  <Experience />
</section>

<section id="education">
  <Education />
</section>

<section id="contact">
  <Contact />
</section>
<Footer />
    </>
  )
}
