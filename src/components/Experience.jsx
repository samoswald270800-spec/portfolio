import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience = () => {
    return (
        <section style={{ padding: '8rem 5%', minHeight: '100vh', position: 'relative' }}>
            <motion.h2
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '12vw',
                    color: 'var(--surface)',
                    WebkitTextStroke: '1px var(--text)',
                    lineHeight: 0.8,
                    marginBottom: '4rem',
                    opacity: 0.2
                }}
            >
                CAREER
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                {experience.map((job, index) => (
                    <ExperienceCard key={index} job={job} index={index} />
                ))}
            </div>
        </section>
    );
};

const ExperienceCard = ({ job, index }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card interactive"
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: 'pointer' }}
            layout
        >
            {/* DECORATIVE CARD INDEX */}
            <div style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                fontSize: '4rem', fontFamily: 'var(--font-display)',
                color: 'var(--text)', opacity: 0.03, pointerEvents: 'none'
            }}>
                0{index + 1}
            </div>

            <motion.div layout="position" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '2rem' }}>{job.company}</h3>
                <span style={{
                    color: 'var(--accent)', fontFamily: 'var(--font-body)', fontWeight: 600,
                    padding: '0.2rem 0.8rem', border: '1px solid var(--accent)', borderRadius: '50px', fontSize: '0.8rem'
                }}>{job.period}</span>
            </motion.div>

            <motion.h4 layout="position" style={{
                fontSize: '1.2rem',
                fontFamily: 'var(--font-body)',
                color: 'var(--text)',
                marginBottom: isOpen ? '2rem' : '0'
            }}>
                {job.role}
            </motion.h4>

            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ marginTop: '1rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
                >
                    ▷ Click to view detailed impact
                </motion.div>
            )}

            {isOpen && (
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ listStyle: 'none', padding: 0 }}
                >
                    {job.achievements.map((item, i) => (
                        <li key={i} style={{
                            marginBottom: '1.2rem',
                            lineHeight: 1.6,
                            opacity: 0.9,
                            color: 'var(--text)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.8rem'
                        }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>+</span>
                            {item}
                        </li>
                    ))}
                </motion.ul>
            )}
        </motion.div>
    );
};

export default Experience;
