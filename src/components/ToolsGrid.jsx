import React from 'react';
import { motion } from 'framer-motion';
import skillsData from './data/skills_data.json';

const ToolsGrid = () => {
    const tools = skillsData.tools;

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { 
                                duration: 0.3,
                                type: "spring",
                                stiffness: 300
                            }
                        }}
                        transition={{ 
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                        }}
                        viewport={{ once: true }}
                        className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-main transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <div className="absolute inset-0 bg-main/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                                <img 
                                    src={tool.icon} 
                                    alt={tool.item} 
                                    className="w-10 h-10 object-contain relative z-10"
                                    style={{ 
                                        filter: 'brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(1000%) hue-rotate(220deg)'
                                    }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://cdn.simpleicons.org/error/white";
                                    }}
                                />
                            </div>
                            <span className="text-lightGray text-sm font-medium text-center">{tool.item}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-main/0 to-main/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ToolsGrid; 