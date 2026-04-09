import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFigma, FaGithub, FaJava, FaLinux, FaTrello } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';
import {
  SiAntdesign,
  SiDigitalocean,
  SiDirectus,
  SiDocker,
  SiExpo,
  SiIos,
  SiLetsencrypt,
  SiMaterialdesign,
  SiMinio,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiSpringboot,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: Math.random(),
      title: 'Umzuger',
      description: 'Fullstack transportation web site',
      longDescription: '',
      category: 'Full Stack',
      image: '/umzuger.png',
      tech: [SiNextdotjs, SiAntdesign, FaGithub],
      github: 'https://github.com/zaqoutm/umzuger',
      live: 'https://zaqoutm.github.io/umzuger/',
    },
    {
      id: Math.random(),
      title: 'T Dental Center',
      description: 'App for doctors, Aligners Laboratory',
      longDescription: '',
      category: 'Full Stack',
      image: '/dental-center.png',
      tech: [
        SiReact,
        SiNodedotjs,
        ,
        SiSpringboot,
        SiNextdotjs,
        FaJava,
        SiMaterialdesign,
        SiRabbitmq,
        SiLetsencrypt,
        SiIos,
        FaFigma,
        FaTrello,
        SiPostgresql,
        SiDigitalocean,
        SiDocker,
        SiNginx,
        SiMinio,
        FaLinux,
      ],
      live: 'https://www.crystalaligner.com',
    },
    {
      id: Math.random(),
      title: 'Events hub',
      description: 'Fullstack web site, using Superbase + Nextjs',
      longDescription:
        'Built with Next.js and Node.js, featuring user authentication, product management, shopping cart, payment processing with Stripe, order tracking, and admin dashboard. Implemented advanced search and filtering, real-time notifications, and mobile-responsive design.',
      category: 'Full Stack',
      image: '/events-hub.png',
      tech: [SiNextdotjs, SiPostgresql, SiVercel, FaGithub, MdLiveTv],
      github: 'https://github.com/zaqoutm/events-hub',
      live: 'https://events-hub-indol.vercel.app/',
    },
    {
      id: Math.random(),
      title: 'T Dental Center',
      description: 'IOS App for doctors',
      longDescription: '',
      category: 'Full stack, Cross Platform',
      image: '/ios.png',
      tech: [SiReact, SiExpo, SiNodedotjs],
      live: 'https://apps.apple.com/de/app/crystal-aligner/id6443614330?l=en-GB',
    },

    {
      id: Math.random(),
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
      id: Math.random(),
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
      id: Math.random(),
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
      id: Math.random(),
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
      id: Math.random(),
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
      id: Math.random(),
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
      id: Math.random(),
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
              {/* projects list */}
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      height: '200px',
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top',
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
                      {project.tech.map((TechIcon: any, index) => (
                        <TechIcon
                          key={index}
                          style={{
                            fontSize: '1.5rem',
                            color: 'var(--accent-green)',
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
                        borderTop: project.github || project.live ? '1px solid #000' : '0',
                        paddingTop: 21,
                      }}
                    >
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target='_blank'
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
                          href={project.live}
                          target='_blank'
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
    </section>
  );
};

export default Projects;
