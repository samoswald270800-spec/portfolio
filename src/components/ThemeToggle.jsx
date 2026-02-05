import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                top: '2rem',
                right: '2rem',
                zIndex: 10000,
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                boxShadow: '0 4px 20px var(--shadow-color)'
            }}
        >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.button>
    );
};

export default ThemeToggle;
