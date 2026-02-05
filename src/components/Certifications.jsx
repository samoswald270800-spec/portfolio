import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    // Resume-accurate metrics
    const impacts = [
        { metric: "+21%", label: "CONVERSION LIFT", context: "Sitewide CRO Program" },
        { metric: "+12%", label: "PRODUCT ADOPTION", context: "Personalization Strategy" },
        { metric: "-18%", label: "BOUNCE RATE", context: "Navigation Redesign" },
        { metric: "+25%", label: "CTR INCREASE", context: "Homepage A/B Testing" }
    ];

    return (
        <section style={{ padding: '8rem 5%', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                <h2 className="section-title" style={{ marginBottom: 0 }}>IMPACT</h2>
                <div style={{ fontFamily: 'monospace', opacity: 0.5 }}>PERFORMANCE_METRICS</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                {impacts.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '220px', textAlign: 'center' }}
                    >
                        <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                            {item.metric}
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, marginTop: '1rem', letterSpacing: '0.1em' }}>
                            {item.label}
                        </div>
                        <div style={{ fontFamily: 'monospace', opacity: 0.6, fontSize: '0.8rem', marginTop: '0.5rem' }}>
                            [{item.context}]
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
