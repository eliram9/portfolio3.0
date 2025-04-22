import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollDownIcon = () => {
    const [isVisible, setIsVisible] = useState(true);
    const controls = useAnimation();

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            // Only hide the icon when scrolled significantly down the page
            if (window.scrollY > window.innerHeight * 0.3) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({
                y: [0, 8, 0],
                transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            });
        } else {
            controls.stop();
        }
    }, [isVisible, controls]);

    // Don't return null immediately - fade it out instead
    return (
        <motion.div
            onClick={handleScroll}
            className="flex items-center justify-center z-10 py-7"
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20
            }}
            transition={{
                duration: 0.3
            }}
        >
            <div className="relative w-7 h-12 border-2 border-main rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <motion.div
                    animate={controls}
                    className="w-2 h-2 bg-white rounded-full"
                />
            </div>
        </motion.div>
    );
};

export default ScrollDownIcon;