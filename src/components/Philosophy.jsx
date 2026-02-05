import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section style={{ padding: '10rem 5%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ fontFamily: 'monospace', color: 'var(--accent-sub)', marginBottom: '2rem' }}
            >
                // PHILOSOPHY_MANIFESTO
            </motion.p>
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    maxWidth: '1200px',
                    lineHeight: 1.2,
                    color: 'var(--text)'
                }}
            >
                "Data is the new oil, but <span style={{ color: 'var(--accent)' }}>refinement</span> is the engine. I don't just track metrics; I architect intelligence systems that turn raw signals into executive strategy."
            </motion.h2>
        </section>
    );
};

export default Philosophy;
