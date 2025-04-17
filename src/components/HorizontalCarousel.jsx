import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import skillsData from './data/skills_data.json';

const HorizontalCarousel = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState(0);
    const containerRef = useRef(null);
    const controls = useAnimation();

    const tools = skillsData.tools;
    const totalItems = tools.length;
    const radius = 300;

    useEffect(() => {
        let animationFrame;
        let startTime = null;
        const duration = 30000; // 30 seconds for one full rotation

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const newRotation = (progress * 360) % 360;
            setRotation(newRotation);
            animationFrame = requestAnimationFrame(animate);
        };

        if (!isHovered) {
            animationFrame = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isHovered]);

    const handleHoverStart = () => {
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    const calculatePosition = (index) => {
        const angle = (index * (360 / totalItems) + rotation) * (Math.PI / 180);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
    };

    return (
        <div 
            ref={containerRef}
            className="w-full h-[800px] overflow-hidden py-10 relative"
        >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {[...tools, ...tools].map((tool, index) => {
                    const position = calculatePosition(index);
                    return (
                        <motion.div
                            key={`${tool.id}-${index}`}
                            className="absolute w-[120px] h-[120px] bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-main transition-all duration-300 cursor-pointer group"
                            style={{
                                x: position.x - 60,
                                y: position.y - 60,
                                rotate: -rotation
                            }}
                            whileHover={{ 
                                scale: 1.2,
                                transition: { 
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 300
                                }
                            }}
                        >
                            <div className="flex flex-col items-center gap-2 h-full">
                                <div className="relative w-10 h-10 flex items-center justify-center">
                                    <motion.div 
                                        className="absolute inset-0 bg-main/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <img 
                                        src={tool.icon} 
                                        alt={tool.item} 
                                        className="w-6 h-6 object-contain relative z-10"
                                        style={{ 
                                            filter: 'brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(1000%) hue-rotate(220deg)'
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://cdn.simpleicons.org/error/white";
                                        }}
                                    />
                                </div>
                                <motion.span 
                                    className="text-lightGray text-xs font-medium text-center"
                                    animate={{
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {tool.item}
                                </motion.span>
                            </div>
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-b from-main/0 to-main/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                    background: [
                                        'linear-gradient(to bottom, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.05) 100%)',
                                        'linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.15) 100%)',
                                        'linear-gradient(to bottom, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.05) 100%)'
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default HorizontalCarousel; 