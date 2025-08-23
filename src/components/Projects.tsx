import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaLinux, FaTimes } from 'react-icons/fa';
import {
  SiAntdesign,
  SiDigitalocean,
  SiDirectus,
  SiDocker,
  SiMinio,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Aljazara news network.',
      description: 'Fullstack News web site + Directus',
      longDescription:
        'Built with Next.js and Node.js, featuring user authentication, product management, shopping cart, payment processing with Stripe, order tracking, and admin dashboard. Implemented advanced search and filtering, real-time notifications, and mobile-responsive design.',
      category: 'Full Stack',
      image: '/aljazara.png',
      tech: [
        SiReact,
        SiNodedotjs,
        SiNextdotjs,
        SiMysql,
        SiDirectus,
        SiDigitalocean,
        SiDocker,
        SiNginx,
        SiMinio,
        FaLinux,
      ],
      github: 'https://github.com/zaqoutm/aljazara/',
      live: 'https://zaqoutm.github.io/aljazara/',
      features: ['User Authentication', 'Admin Dashboard', 'Real-time Updates'],
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern payment integration',
      longDescription:
        'A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, product management, shopping cart, payment processing with Stripe, order tracking, and admin dashboard. Implemented advanced search and filtering, real-time notifications, and mobile-responsive design.',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1648134859196-3aa762e9440d?q=80&w=2920&auto=format&fit=crop',
      tech: [SiReact, SiNodedotjs, SiMongodb],
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Real-time Updates'],
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription:
        'A sophisticated task management application featuring real-time collaboration, drag-and-drop interface, team management, progress tracking, and advanced reporting. Built with modern technologies for optimal performance and user experience.',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: [SiReact, SiTypescript, SiMui],
      features: ['Real-time Collaboration', 'Drag & Drop', 'Team Management', 'Progress Tracking'],
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'Intelligent chatbot with natural language processing',
      longDescription:
        'An advanced AI-powered chat application integrating OpenAI GPT models, featuring context-aware conversations, multiple chat rooms, message history, and real-time responses. Includes user authentication, chat analytics, and customizable AI personalities.',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop',
      tech: [SiNextdotjs, SiPython, SiPostgresql, SiDocker, SiAntdesign],
      features: ['AI Integration', 'Real-time Chat', 'Context Awareness', 'Analytics Dashboard'],
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      longDescription:
        'A comprehensive weather dashboard providing detailed forecasts, weather maps, historical data, and location-based recommendations. Features include severe weather alerts, interactive charts, and customizable widgets for different locations.',
      category: 'Frontend',
      image:
        'https://plus.unsplash.com/premium_photo-1721080250900-f55035ae6fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: [SiReact, SiTypescript, SiMui],
      features: ['Location-based', 'Interactive Maps', 'Weather Alerts', 'Historical Data'],
    },
    {
      id: 6,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with advanced features',
      longDescription:
        'A robust social media API built with Node.js and Express, featuring user management, post creation and interaction, follow system, real-time notifications, content moderation, and comprehensive analytics. Includes rate limiting, caching, and security best practices.',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tech: [SiNodedotjs, SiMongodb, SiDocker],
      features: ['RESTful API', 'Real-time Notifications', 'Content Moderation', 'Analytics'],
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'Modern, animated portfolio with dynamic content',
      longDescription:
        'A stunning, fully responsive portfolio website featuring smooth animations, dynamic content loading, contact form integration, blog functionality, and optimized performance. Built with modern web technologies and design principles.',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tech: [SiNextdotjs, SiTypescript, SiMui],
      features: ['Responsive Design', 'Smooth Animations', 'Contact Integration', 'Blog System'],
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section id='projects' className='section-padding'>
      <div className='container'>
        <motion.div ref={ref} variants={containerVariants} initial='hidden' animate={inView ? 'visible' : 'hidden'}>
          {/* Section Header */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                marginBottom: '1rem',
              }}
            >
              <span className='gradient-text'>Featured Projects</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--muted-text)',
                maxWidth: '600px',
                margin: '0 auto 3rem',
              }}
            >
              Showcasing my latest work in fullstack development and creative problem solving
            </p>

            {/* Filter Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: filter === category ? 'var(--gradient-primary)' : 'transparent',
                    border: '2px solid var(--accent-blue)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '25px',
                    color: filter === category ? 'white' : 'var(--accent-blue)',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  whileHover={{ y: -10 }}
                  style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      height: '200px',
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      className='project-overlay'
                    >
                      <span style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>View Details</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div style={{ padding: '2rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <span
                        style={{
                          background: 'var(--accent-blue)',
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: 'var(--primary-text)',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        color: 'var(--muted-text)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.tech.map((TechIcon, index) => (
                        <TechIcon
                          key={index}
                          style={{
                            fontSize: '1.5rem',
                            color: 'var(--accent-blue)',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      ))}
                    </div>

                    {/* Project Links */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '1rem',
                      }}
                    >
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          style={{
                            color: 'var(--secondary-text)',
                            fontSize: '1.2rem',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--secondary-text)')}
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          style={{
                            color: 'var(--secondary-text)',
                            fontSize: '1.2rem',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-green)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--secondary-text)')}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              style={{
                background: 'var(--secondary-bg)',
                borderRadius: '20px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-text)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  zIndex: 1001,
                }}
              >
                <FaTimes />
              </button>

              {/* Modal Content */}
              <div>
                <div
                  style={{
                    height: '300px',
                    backgroundImage: `url(${selectedProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px 20px 0 0',
                  }}
                />

                <div style={{ padding: '2rem' }}>
                  <h3
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      background: 'var(--gradient-primary)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {selectedProject.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--secondary-text)',
                      marginBottom: '2rem',
                      lineHeight: '1.7',
                    }}
                  >
                    {selectedProject.longDescription}
                  </p>

                  {/* Features */}
                  <h4 style={{ marginBottom: '1rem', color: 'var(--primary-text)' }}>Key Features</h4>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div
                        key={index}
                        style={{
                          background: 'var(--glass-bg)',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid var(--glass-border)',
                        }}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <h4 style={{ marginBottom: '1rem', color: 'var(--primary-text)' }}>Technologies Used</h4>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      marginBottom: '2rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    {selectedProject.tech.map((TechIcon: any, index: number) => (
                      <TechIcon
                        key={index}
                        style={{
                          fontSize: '2rem',
                          color: 'var(--accent-blue)',
                        }}
                      />
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'center',
                    }}
                  >
                    {selectedProject.github && (
                      <motion.a
                        target='_blank'
                        href={selectedProject.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          background: 'var(--accent-blue)',
                          color: 'white',
                          padding: '1rem 2rem',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: '600',
                        }}
                      >
                        <FaGithub /> View Code
                      </motion.a>
                    )}

                    {selectedProject.live && (
                      <motion.a
                        target='_blank'
                        href={selectedProject.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          background: 'var(--accent-green)',
                          color: 'white',
                          padding: '1rem 2rem',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: '600',
                        }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .project-overlay {
          transition: opacity 0.3s ease;
        }
        
        .project-overlay:hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
