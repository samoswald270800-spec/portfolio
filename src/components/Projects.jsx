import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
    return (
        <section style={{ padding: '8rem 5%', position: 'relative' }}>
            <motion.h2
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    color: 'var(--text)',
                    textAlign: 'right',
                    marginBottom: '6rem',
                    lineHeight: 0.8
                }}
            >
                SELECTED<br />WORKS
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="project-row"
                        style={{

                            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',

                        }}
                    >
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <div style={{
                                fontSize: '5rem',
                                fontFamily: 'var(--font-display)',
                                color: 'transparent',
                                WebkitTextStroke: '1px var(--accent)',
                                lineHeight: 1,
                                marginBottom: '1rem',
                                opacity: 0.5
                            }}>
                                0{index + 1}
                            </div>
                        </div>

                        <div style={{ flex: 2, minWidth: '300px' }} className="glass-card interactive">
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{project.title}</h3>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{
                                        fontFamily: 'monospace',
                                        color: 'var(--accent-sub)',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase'
                                    }}>[{t}]</span>
                                ))}
                            </div>
                            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', opacity: 0.9 }}>
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
