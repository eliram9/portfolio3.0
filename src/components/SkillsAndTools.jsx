import React from 'react';

import { motion } from 'framer-motion';

import SpinningCarousel3D from './SpinningCarousel3D';
import skillsData from './data/skills_data.json';
import SectionTitle from './SectionTitle';


const SkillsAndTools = () => {
    return (
        <div id='skills' className="h-fit mt-56">
            {/* Skills Section */}
            <div>
                <SectionTitle text="S K I L L S" position="center" />
            
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
                <h2 className="text-lg md:text-2xl lg:3xl text-lightGray font-orbitron tracking-widest text-center mt-32">T O O L S  <span className='px-5'>&</span>  T E C H N O L O G I E S</h2>
                {/* <SectionTitle text={`T O O L S  &  T E C H N O L O G I E S`} position="center" /> */}
                <div>
                    <SpinningCarousel3D />
                </div>
            </div>
        </div>
    );
};

export default SkillsAndTools; 