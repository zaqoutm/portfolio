import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.9)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          padding: '1rem 0'
        }}
      >
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                cursor: 'pointer'
              }}
              onClick={() => scrollToSection('#hero')}
            >
              Mohammed
            </motion.div>

            {/* Desktop Navigation */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }} className="desktop-nav">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.href.slice(1) 
                      ? 'var(--accent-blue)' 
                      : 'var(--secondary-text)',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent-blue)',
                        borderRadius: '1px'
                      }}
                    />
                  )}
                </motion.button>
              ))}

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                style={{
                  background: 'var(--gradient-primary)',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                }}
              >
                Get In Touch
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary-text)',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              className="mobile-menu-btn"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          background: 'var(--primary-bg)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem'
        }}
        className="mobile-menu"
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 20 
            }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary-text)',
              fontSize: '1.5rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            {item.name}
          </motion.button>
        ))}

        <motion.button
          onClick={() => scrollToSection('#contact')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            y: isOpen ? 0 : 20 
          }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'var(--gradient-primary)',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '25px',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Get In Touch
        </motion.button>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
