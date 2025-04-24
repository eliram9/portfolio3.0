import React from 'react';

import { motion } from 'framer-motion';

import aws from '../icons/aws.png';
import apollo from '../icons/apollo.png';
import ba from '../icons/ba.png';


const CertificateCard = ({ 
    icon, 
    title, 
    description, 
    issueDate, 
    certificateUrl,
    delay = 0 
}) => {
    const getIcon = (iconName) => {
        switch(iconName) {
            case 'aws':
                return aws;
            case 'apollo':
                return apollo;
            case 'ba':
                return ba;
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-main hover:border-main transition duration-300"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-main/15 rounded-full flex items-center justify-center">
                    <img src={getIcon(icon)} alt={`${title} Icon`} className="w-6 h-6" />
                </div>
                <h3 className="text-lg text-lightGray">{title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex items-center justify-between pt-6">
                <span className="text-sm text-gray-400">Issued: {issueDate}</span>
                <a 
                    href={certificateUrl} 
                    className="text-main hover:text-indigo-300 transition duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Certificate →
                </a>
            </div>
        </motion.div>
    );
};

export default CertificateCard; 