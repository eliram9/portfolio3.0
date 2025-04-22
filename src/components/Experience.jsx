import React from "react";

import { motion } from "framer-motion";

import experienceData from './data/experience_data.json';


const Experience = () => {
    return (
        <section id="experience" className="min-h-screen bg-transparent mt-10 text-white relative overflow-hidden font-inter">
            <div className="container mx-auto px-4 py-16">
                <motion.h2 
                    className="text-3xl mb-16 text-lightGray font-orbitron tracking-widest text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    E X P E R I E N C E
                </motion.h2>

                <div className="relative">
                    {/* Timeline Line - Desktop */}
                    <div className="absolute left-1/2 transform -translate-x-[1px] w-0.5 h-full bg-gradient-to-b from-main/80 via-main to-main/80 md:block hidden" />
                    
                    {/* Timeline Line - Mobile */}
                    <div className="absolute left-6 w-0.5 h-full bg-gradient-to-b from-main/80 via-main to-main/80 md:hidden block" />

                    <div className="relative flex flex-col space-y-24 md:space-y-24 space-y-16">
                        {experienceData.experiences.map((exp, index) => (
                            <div key={exp.id} className="relative">
                                {/* Desktop Layout */}
                                <div className="md:flex hidden justify-center items-center">
                                    {/* Logo Circle - Desktop */}
                                    <motion.div
                                        className="absolute z-10 w-20 h-20"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-full h-full rounded-full bg-gray-900/80 backdrop-blur-sm border-2 border-main flex items-center justify-center">
                                            <img 
                                                src={exp.logo} 
                                                alt={exp.company}
                                                className="w-14 h-14 object-cover rounded-full"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/40";
                                                }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Content Grid - Desktop */}
                                    <div className="grid grid-cols-[1fr,auto,1fr] w-full items-center">
                                        {/* Left Side - Content or Date */}
                                        <motion.div
                                            className={`flex ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-end pr-4'}`}
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {index % 2 === 0 ? (
                                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-main/30 inline-block max-w-lg text-left hover:border-main transition-colors duration-300">
                                                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                                                    <p className="text-main mb-4">{exp.company}</p>
                                                    <ul className="space-y-3 mb-6">
                                                        {exp.details.map((detail, detailIndex) => (
                                                            <motion.li
                                                                key={detailIndex}
                                                                className="flex items-start gap-3 text-lightGray text-sm"
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 0.1 * detailIndex }}
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></span>
                                                                {detail}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                    <div className="flex flex-wrap gap-2 justify-start">
                                                        {exp.skills.map((skill, skillIndex) => (
                                                            <motion.span
                                                                key={skillIndex}
                                                                className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-lightGray border border-gray-700"
                                                                initial={{ opacity: 0 }}
                                                                whileInView={{ opacity: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 0.2 + skillIndex * 0.1 }}
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    borderColor: "rgb(99, 102, 241)"
                                                                }}
                                                            >
                                                                {skill}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <motion.p 
                                                    className="text-main text-lg pr-2"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {exp.period}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        {/* Center - For Logo Space */}
                                        <div className="w-20" />

                                        {/* Right Side - Date or Content */}
                                        <motion.div
                                            className={`flex ${index % 2 === 0 ? 'justify-start pl-4' : 'justify-start pl-12'}`}
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {index % 2 === 1 ? (
                                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-main/30 inline-block max-w-lg text-left hover:border-main transition-colors duration-300">
                                                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                                                    <p className="text-main mb-4">{exp.company}</p>
                                                    <ul className="space-y-3 mb-6">
                                                        {exp.details.map((detail, detailIndex) => (
                                                            <motion.li
                                                                key={detailIndex}
                                                                className="flex items-start gap-3 text-lightGray text-sm"
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 0.1 * detailIndex }}
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></span>
                                                                {detail}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                    <div className="flex flex-wrap gap-2 justify-start">
                                                        {exp.skills.map((skill, skillIndex) => (
                                                            <motion.span
                                                                key={skillIndex}
                                                                className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-lightGray border border-gray-700"
                                                                initial={{ opacity: 0 }}
                                                                whileInView={{ opacity: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 0.2 + skillIndex * 0.1 }}
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    borderColor: "rgb(99, 102, 241)"
                                                                }}
                                                            >
                                                                {skill}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <motion.p 
                                                    className="text-main text-lg font-medium pl-2"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {exp.period}
                                                </motion.p>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>
                                
                                {/* Mobile Layout */}
                                <div className="md:hidden flex">
                                    {/* Logo Circle - Mobile */}
                                    <motion.div
                                        className="absolute left-[5px] top-2 z-10"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-10 h-10 border-[2px] rounded-full bg-gray-900/80 backdrop-blur-sms border-main flex items-center justify-center shadow-lg">
                                            <img 
                                                src={exp.logo} 
                                                alt={exp.company}
                                                className="w-8 h-8 object-cover rounded-full"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/40";
                                                }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Content Card - Mobile */}
                                    <motion.div
                                        className="ml-14 bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg w-full mr-2"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-main mb-3 text-sm">{exp.company}</p>
                                        <ul className="space-y-2 mb-4">
                                            {exp.details.map((detail, detailIndex) => (
                                                <motion.li
                                                    key={detailIndex}
                                                    className="flex items-start gap-2 text-lightGray text-xs"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * detailIndex }}
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0"></span>
                                                    {detail}
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-1 justify-start mb-3">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skillIndex}
                                                    className="px-2 py-0.5 bg-gray-800/50 rounded-full text-xs text-lightGray"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.2 + skillIndex * 0.1 }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                        <p className="text-main text-xs font-medium pt-2 border-t border-gray-800/50">
                                            {exp.period}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;