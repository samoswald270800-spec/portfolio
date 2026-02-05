import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section style={{ padding: '8rem 5%', position: 'relative', overflow: 'hidden' }}>
            {/* GRID BACKGROUND DETAIL */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.1,
                pointerEvents: 'none'
            }} />

            {/* ROTATING CIRCLE BG */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute', top: -200, right: -200,
                    width: '600px', height: '600px',
                    border: '1px dashed var(--accent)',
                    borderRadius: '50%',
                    opacity: 0.1,
                    pointerEvents: 'none'
                }}
            />

            <h2 className="section-title" style={{ textAlign: 'right' }}>ARSENAL</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {skills.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div style={{
                            borderTop: '1px solid var(--border)',
                            paddingTop: '1rem',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>{cat.category}</h3>
                            <span style={{ fontSize: '3rem', color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>0{i + 1}</span>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {cat.items.map((skill, j) => (
                                <span key={j} className="interactive" style={{
                                    padding: '0.8rem 2rem',
                                    borderRadius: '100px',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--border)',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'crosshair',
                                    transition: '0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'var(--accent)';
                                        e.target.style.color = 'var(--bg)';
                                        e.target.style.borderColor = 'var(--accent)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'var(--surface)';
                                        e.target.style.color = 'var(--text)';
                                        e.target.style.borderColor = 'var(--border)';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
