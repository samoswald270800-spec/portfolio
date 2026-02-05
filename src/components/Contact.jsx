import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="full-screen flex-center" style={{ flexDirection: 'column', background: 'var(--accent)', color: 'var(--bg)' }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center' }}
            >
                <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: '2rem' }}>
                    READY TO<br />MEASURE?
                </h2>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                    <a href={`mailto:${contact.email}`} className="interactive" style={{
                        display: 'inline-block',
                        padding: '1.5rem 4rem',
                        background: 'var(--bg)',
                        color: 'var(--accent)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        borderRadius: '100px',
                        fontFamily: 'var(--font-body)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}>
                        INITIATE CONTACT
                    </a>

                    {contact.linkedin && (
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="interactive" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'var(--bg)',
                            color: '#0077b5', // LinkedIn Blue
                            fontSize: '2rem',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }} aria-label="LinkedIn Profile">
                            <FaLinkedin />
                        </a>
                    )}
                </div>
            </motion.div>

            <div style={{ position: 'absolute', bottom: '5rem', width: '100%', padding: '0 5%', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                <span>{contact.location}</span>
                <span>© {new Date().getFullYear()} SAM OSWALD</span>
            </div>
        </section>
    );
};

export default Contact;
