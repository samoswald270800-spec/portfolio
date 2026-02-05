import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsShowcase = () => {
    return (
        <section style={{ padding: '8rem 5%', position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    color: 'var(--text)',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}
            >
                VISUAL INTELLIGENCE
            </motion.h2>

            <div className="grid-cols">

                {/* GRAPH 1: LINE CHART */}
                <div className="glass-card">
                    <h3 style={{ fontFamily: 'monospace', color: 'var(--accent-sub)', marginBottom: '1rem' }}>CONVERSION VELOCITY</h3>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '5px', position: 'relative', overflow: 'hidden' }}>
                        {/* Mock Line Path */}
                        <svg viewBox="0 0 100 50" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M0,50 C20,50 20,30 40,30 C60,30 60,10 100,0"
                                fill="none"
                                stroke="var(--accent)"
                                strokeWidth="2"
                            />
                            {/* Area fill */}
                            <motion.path
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.2 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                d="M0,50 C20,50 20,30 40,30 C60,30 60,10 100,0 V50 H0"
                                fill="var(--accent)"
                            />
                        </svg>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '0.8rem', marginTop: '1rem', opacity: 0.6 }}>
                        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                    </div>
                </div>

                {/* GRAPH 2: BAR CHART */}
                <div className="glass-card">
                    <h3 style={{ fontFamily: 'monospace', color: 'var(--accent-sub)', marginBottom: '1rem' }}>USER RETENTION COHORTS</h3>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                style={{
                                    width: '12%',
                                    background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-sub)',
                                    opacity: 0.8,
                                    borderRadius: '4px 4px 0 0'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* GRAPH 3: CIRCULAR METRICS */}
                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ fontFamily: 'monospace', color: 'var(--accent-sub)', marginBottom: '1rem', width: '100%' }}>LIFETIME VALUE</h3>
                    <div style={{ position: 'relative', width: '160px', height: '160px' }}>
                        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                            <circle cx="50" cy="50" r="45" stroke="var(--border)" strokeWidth="8" fill="none" />
                            <motion.circle
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 0.78 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                cx="50" cy="50" r="45"
                                stroke="var(--accent)"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>+24%</span>
                            <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>YoY GROWTH</span>
                        </div>
                    </div>
                </div>

                {/* GRAPH 4: DATA PIPELINE ARCHITECTURE */}
                <div className="glass-card" style={{ gridColumn: '1 / -1' }}>
                    <h3 style={{ fontFamily: 'monospace', color: 'var(--accent-sub)', marginBottom: '2rem' }}>END-TO-END DATA ARCHITECTURE</h3>
                    <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', padding: '0 2rem' }}>

                        {/* Connecting Line Backdrop */}
                        <div style={{ position: 'absolute', top: '50%', left: '4rem', right: '4rem', height: '1px', background: 'var(--border)', zIndex: 0 }} />

                        {/* Data Packets Flowing */}
                        <motion.div
                            animate={{ left: ['5%', '95%'], opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: 'absolute', top: '50%',
                                width: '100px', height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                                zIndex: 1, transform: 'translateY(-50%)'
                            }}
                        />

                        {['SOURCE', 'ETL / PREP', 'WAREHOUSE', 'INSIGHT'].map((label, i) => (
                            <div key={i} style={{
                                zIndex: 2,
                                background: '#111', // Dark background to cover line
                                padding: '0.8rem 1.5rem',
                                border: '1px solid var(--border)',
                                borderLeft: '2px solid var(--accent)',
                                borderRadius: '4px',
                                textAlign: 'center',
                                minWidth: '120px'
                            }}>
                                <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', color: 'var(--accent-sub)', marginBottom: '4px' }}>STEP_0{i + 1}</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AnalyticsShowcase;
