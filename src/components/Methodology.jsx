import React from 'react';
import { motion } from 'framer-motion';

const Methodology = () => {
    const steps = [
        { title: "Identify", desc: "Pinpointing data gaps and KPI misalignment." },
        { title: "Instrument", desc: "Deploying robust tracking via GTM & CDPs." },
        { title: "Analyze", desc: "Extracting signal from noise using SQL & Py." },
        { title: "Optimize", desc: "A/B testing for continuous incremental lift." }
    ];

    return (
        <section style={{ padding: '8rem 5%', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--text)' }}>
                    OPERATIONAL<br />METHODOLOGY
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text)' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text)', opacity: 0.7, lineHeight: 1.5 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
