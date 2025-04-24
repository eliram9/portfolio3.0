import React from 'react';

import { motion } from 'framer-motion';


const SectionHeader = ({ subtitle, title, position = 'start' }) => {
    const alignmentClass = position === 'center' ? 'text-center' : 'text-start lg:text-left';

    return (
        <div className={`space-y-2 ${alignmentClass}`}>
            <h3 className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-main mb-2 ${alignmentClass}`}>
                {subtitle}
            </h3>

            <motion.h1 className={`text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-orbitron tracking-normal pb-5 ${alignmentClass}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
            >
                {title}
                <span className="text-lightGray">.</span>
            </motion.h1>
        </div>
    );
};

export default SectionHeader;