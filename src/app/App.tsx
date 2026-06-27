import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Activities } from './components/Activities';
import { Social } from './components/Social';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Apply Poppins font and smooth scrolling
    document.body.style.fontFamily = "'Poppins', sans-serif";
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Set Black Panther inspired background
    document.body.style.backgroundColor = '#090d16';
    document.body.style.color = '#ffffff';
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-white">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Activities Section */}
      <Activities />

      {/* Social/GitHub Section */}
      <Social />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}