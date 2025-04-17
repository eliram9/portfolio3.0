import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import skillsData from './data/skills_data.json';

const SpinningCarousel3D = () => {
    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(1);

    const tools = skillsData.tools;
    const totalItems = tools.length;
    const radius = 400;
    const cardWidth = 150;
    const cardHeight = 100;

    useEffect(() => {
        let animationFrame;
        let startTime = null;
        const duration = 30000; // 30 seconds for one full rotation

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const newRotation = (progress * 360 * direction) % 360;
            setRotation(newRotation);
            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [direction]);

    const handleMouseEnter = () => {
        setDirection(-1); // Reverse direction on hover
    };

    const handleMouseLeave = () => {
        setDirection(1); // Return to normal direction
    };

    return (
        <div 
            className="w-full max-w-lg aspect-[1/1] mx-auto relative"
            style={{ perspective: "1000px" }}
        >
            <div 
                className="w-full h-full relative"
                style={{ 
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotation}deg)`
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {tools.map((tool, index) => {
                    const angle = (index * 360) / totalItems;
                    const zIndex = Math.round(100 * Math.cos((angle * Math.PI) / 180));

                    return (
                        <div
                            key={tool.id}
                            className="absolute bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 border border-gray-800"
                            style={{
                                width: cardWidth,
                                height: cardHeight,
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                transformStyle: "preserve-3d",
                                zIndex,
                                left: `calc(50% - ${cardWidth / 2}px)`,
                                top: `calc(50% - ${cardHeight / 1.5}px)`,
                            }}
                        >
                            <div className="flex flex-col items-center gap-2 h-full">
                                <div className="relative w-10 h-10 flex items-center justify-center">
                                    <img 
                                        src={tool.icon} 
                                        alt={tool.item} 
                                        className="w-6 h-6 object-contain"
                                        style={{ 
                                            filter: 'brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(1000%) hue-rotate(220deg)'
                                        }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://cdn.simpleicons.org/error/white";
                                        }}
                                    />
                                </div>
                                <span className="text-lightGray text-xs font-medium text-center">
                                    {tool.item}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SpinningCarousel3D; 