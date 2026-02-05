import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            animate={{
                x: position.x - (isHovering ? 32 : 10),
                y: position.y - (isHovering ? 32 : 10),
                height: isHovering ? 64 : 20,
                width: isHovering ? 64 : 20,
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.8
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                pointerEvents: 'none',
                zIndex: 99999,
                mixBlendMode: 'difference',
            }}
        />
    );
};

export default CustomCursor;
