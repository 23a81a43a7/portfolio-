import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  useEffect(() => {
    // If we wanted to toggle a class on body, we could do it here
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // For this design, we are strictly dark-mode oriented as per requirements,
    // but the toggle functionality is here if we want to expand light mode styles in Tailwind.
  };

  return (
    <div className={`relative min-h-screen text-slate-100 selection:bg-accent-purple/30 selection:text-white`}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
