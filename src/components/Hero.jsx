import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section className="full-screen flex-center" style={{ flexDirection: 'column', position: 'relative' }}>

            {/* OPTIMIZED DYNAMIC BACKGROUND BLOB */}
            {/* STATIC HERO ACCENT - ZERO CPU USAGE */}
            {/* OPTIMIZED DYNAMIC BACKGROUND BLOB - RE-ANIMATED & GPU ACCELERATED */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    width: '60vw', height: '60vw',
                    x: '-50%', y: '-50%',
                    background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                    opacity: 0.15,
                    zIndex: 0,
                    willChange: 'transform', // CRITICAL FOR NO LAG
                    pointerEvents: 'none'
                }}
            />

            {/* MINUTE DETAIL: CORNER DATA */}
            <div style={{ position: 'absolute', top: '3rem', left: '3rem', fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.8, zIndex: 12 }}>
                LOC: TORONTO, ON <br />
                COORDS: 43.6532° N, 79.3832° W <br />
                SYS.STATUS: ONLINE
            </div>

            <div className="hero-hud-right">
                VERSION: 2.5.0 <br />
                BUILD: STABLE
            </div>

            {/* MASSIVE HERO TEXT - STAGGERED */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', lineHeight: 0.8 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontFamily: 'monospace',
                        color: 'var(--accent)',
                        fontSize: '1rem',
                        marginBottom: '1rem',
                        letterSpacing: '0.2rem',
                        textTransform: 'uppercase'
                    }}
                >
                    [ WHO AM I ? ]
                </motion.div>
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="hero-text"
                >
                    SAM
                </motion.h1>
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="hero-text"
                    style={{ color: 'transparent', WebkitTextStroke: '2px var(--text)' }}
                >
                    OSWALD
                </motion.h1>
            </div>

            {/* FLOATING SUBTITLE */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    marginTop: '4rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.2rem',
                    letterSpacing: '0.2rem',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    zIndex: 10
                }}
            >
                <span style={{ color: 'var(--accent)' }}>////</span> Digital Analytics Authority
            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    opacity: 0.6
                }}
            >
                SCROLL TO DECRYPT
            </motion.div>
        </section>
    );
};

export default Hero;
