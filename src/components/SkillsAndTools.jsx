import React from 'react';

import { motion } from 'framer-motion';

import SpinningCarousel3D from './SpinningCarousel3D';
import skillsData from './data/skills_data.json';


const SkillsAndTools = () => {
    return (
        <div className="h-fit">
            {/* Skills Section */}
            <div className="this section">
                <h2 className="text-2xl mb-12 text-lightGray font-orbitron tracking-widest text-center pb-6">S K I L L S</h2>
            
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 mb-20">
                    {skillsData.skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.05,
                                borderColor: "rgb(99, 102, 241)",
                                transition: { duration: 0.2 }
                            }}
                            transition={{ 
                                duration: 0.2,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-main transition-all duration-300 cursor-pointer"
                        >
                            <p className="text-lightGray text-center font-medium">{skill.item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tools Grid Section */}
            <div>
                <h2 className="text-2xl text-lightGray font-orbitron tracking-widest text-center">T O O L S  <span className='px-5'>&</span>  T E C H N O L O G I E S</h2>
                <div>
                    <SpinningCarousel3D />
                </div>
            </div>
        </div>
    );
};

export default SkillsAndTools; 