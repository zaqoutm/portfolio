import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id='contact' className='section-padding' style={{ background: 'var(--secondary-bg)' }}>
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
              <span className='gradient-text'>Get In Touch</span>
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--muted-text)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </motion.div>

          {/* Contact Content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '2rem',
                  color: 'var(--primary-text)',
                }}
              >
                Let's Connect
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                {[
                  {
                    icon: FaEnvelope,
                    label: 'Email',
                    value: 'mohammed@example.com',
                    href: 'mailto:mohammed@example.com',
                  },
                  {
                    icon: FaPhone,
                    label: 'Phone',
                    value: '+1 (555) 123-4567',
                    href: 'tel:+15551234567',
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label: 'Location',
                    value: 'San Francisco, CA',
                    href: '#',
                  },
                ].map((contact) => (
                  <motion.div
                    key={contact.label}
                    whileHover={{ x: 10 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'var(--glass-bg)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '15px',
                      cursor: contact.href !== '#' ? 'pointer' : 'default',
                    }}
                    onClick={() => contact.href !== '#' && window.open(contact.href)}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'var(--gradient-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: 'white',
                      }}
                    >
                      <contact.icon />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--muted-text)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {contact.label}
                      </div>
                      <div
                        style={{
                          fontSize: '1.1rem',
                          color: 'var(--primary-text)',
                          fontWeight: '500',
                        }}
                      >
                        {contact.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '3rem' }}>
                <h4
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--primary-text)',
                  }}
                >
                  Follow Me
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[
                    { icon: FaGithub, href: '#', color: '#333' },
                    { icon: FaLinkedin, href: '#', color: '#0077b5' },
                    { icon: FaTwitter, href: '#', color: '#1da1f2' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: 'var(--secondary-text)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = social.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--secondary-text)')}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    marginBottom: '2rem',
                    color: 'var(--primary-text)',
                  }}
                >
                  Send Message
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  }}
                >
                  {/* Name Input */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        color: 'var(--secondary-text)',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                      }}
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'var(--primary-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '10px',
                        color: 'var(--primary-text)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        color: 'var(--secondary-text)',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                      }}
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'var(--primary-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '10px',
                        color: 'var(--primary-text)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        color: 'var(--secondary-text)',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'var(--primary-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '10px',
                        color: 'var(--primary-text)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        color: 'var(--secondary-text)',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'var(--primary-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '10px',
                        color: 'var(--primary-text)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-blue)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      padding: '1rem 2rem',
                      background: 'var(--gradient-primary)',
                      border: 'none',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginTop: '1rem',
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
