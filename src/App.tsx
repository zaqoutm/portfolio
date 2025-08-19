import Contact from './components/Contact';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer
        style={{
          background: 'var(--primary-bg)',
          borderTop: '1px solid var(--glass-border)',
          padding: '2rem 0',
          textAlign: 'center',
        }}
      >
        <div className='container'>
          <p
            style={{
              color: 'var(--muted-text)',
              fontSize: '0.9rem',
            }}
          >
            © 2024 Mohammed. Built with React, TypeScript & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
