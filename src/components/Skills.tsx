import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaGitAlt, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import {
  SiAngular,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React/Next.js', level: 95, icon: FaReact, color: '#61dafb' },
    { name: 'TypeScript', level: 90, icon: SiTypescript, color: '#3178c6' },
    { name: 'Node.js', level: 88, icon: FaNodeJs, color: '#339933' },
    { name: 'Python', level: 85, icon: FaPython, color: '#3776ab' },
    { name: 'GraphQL', level: 82, icon: SiGraphql, color: '#e10098' },
    { name: 'MongoDB', level: 87, icon: SiMongodb, color: '#47a248' },
    { name: 'PostgreSQL', level: 83, icon: SiPostgresql, color: '#336791' },
    { name: 'Docker', level: 80, icon: FaDocker, color: '#2496ed' },
    { name: 'AWS', level: 78, icon: FaAws, color: '#ff9900' },
    { name: 'Git', level: 92, icon: FaGitAlt, color: '#f05032' },
  ];

  const technologies = [
    { icon: FaReact, name: 'React', color: '#61dafb' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4fc08d' },
    { icon: SiAngular, name: 'Angular', color: '#dd0031' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
    { icon: FaPython, name: 'Python', color: '#3776ab' },
    { icon: FaJs, name: 'JavaScript', color: '#f7df1e' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiRedis, name: 'Redis', color: '#dc382d' },
    { icon: SiGraphql, name: 'GraphQL', color: '#e10098' },
    { icon: FaDocker, name: 'Docker', color: '#2496ed' },
    { icon: SiKubernetes, name: 'Kubernetes', color: '#326ce5' },
    { icon: FaAws, name: 'AWS', color: '#ff9900' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06b6d4' },
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id='skills' className='section-padding' style={{ background: 'var(--secondary-bg)' }}>
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
              <span className='gradient-text'>Skills & Technologies</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--muted-text)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Expertise in modern fullstack development with a passion for learning new technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '5rem',
            }}
          >
            {/* Skills Progress Bars */}
            <motion.div variants={itemVariants}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '2rem',
                  color: 'var(--primary-text)',
                }}
              >
                Core Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    style={{
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '15px',
                      padding: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <skill.icon style={{ color: skill.color, fontSize: '1.2rem' }} />
                        <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      </div>
                      <span style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>{skill.level}%</span>
                    </div>
                    <div
                      style={{
                        height: '8px',
                        background: 'var(--secondary-bg)',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        variants={skillBarVariants}
                        custom={skill.level}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${skill.color}, var(--accent-purple))`,
                          borderRadius: '4px',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technology Icons */}
            <motion.div variants={itemVariants}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '2rem',
                  color: 'var(--primary-text)',
                }}
              >
                Technology Stack
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      rotate: [0, -5, 5, 0],
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '15px',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <tech.icon
                      style={{
                        fontSize: '2.5rem',
                        color: tech.color,
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--secondary-text)',
                        textAlign: 'center',
                        fontWeight: '500',
                      }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '20+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    background: 'var(--gradient-secondary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    color: 'var(--secondary-text)',
                    fontWeight: '500',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
