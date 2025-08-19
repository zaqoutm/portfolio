import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="section">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem'
          }}
        >
          {/* Animated Avatar */}
          <motion.div
            variants={floatingVariants}
            animate="floating"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)'
            }}
            className="glowing"
          >
            M
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Mohammed
            </h1>
          </motion.div>

          {/* Subtitle with typing animation */}
          <motion.div variants={itemVariants}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '500',
              color: 'var(--secondary-text)',
              marginBottom: '2rem'
            }}>
              <span className="gradient-text">Fullstack Developer</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--muted-text)',
              maxWidth: '600px',
              lineHeight: '1.8',
              marginBottom: '3rem'
            }}>
              I craft exceptional digital experiences with modern technologies.
              Passionate about clean code, innovative solutions, and bringing ideas to life.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'var(--gradient-primary)',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
              }}
            >
              <FaDownload /> Download CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                border: '2px solid var(--accent-blue)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                color: 'var(--accent-blue)',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '4rem'
            }}
          >
            {[
              { icon: FaGithub, href: '#', color: '#333' },
              { icon: FaLinkedin, href: '#', color: '#0077b5' },
              { icon: FaTwitter, href: '#', color: '#1da1f2' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  fontSize: '1.8rem',
                  color: 'var(--secondary-text)',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = social.color}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--secondary-text)'}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: '2rem',
              color: 'var(--accent-blue)',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('about')?.scrollIntoView()}
          >
            <HiArrowDown />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
    </section>
  );
};

export default Hero;
