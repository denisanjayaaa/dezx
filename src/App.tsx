/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Skills } from './components/home/Skills';
import { Projects } from './components/home/Projects';
import { Experience } from './components/home/Experience';
import { Contact } from './components/home/Contact';
import { Footer } from './components/layout/Footer';
import { useEffect, useState } from 'react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative selection:bg-brand-cyan/20">
      {/* Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-300 z-50 overflow-hidden"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 245, 255, 0.05), transparent)`
        }}
      />
      
      <Navbar />
      
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

