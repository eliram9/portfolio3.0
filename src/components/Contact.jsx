import React, { useState, useRef} from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

import { EarthCanvas } from "./canvas";
import SectionHeader from './SectionHeader';


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        // Replace these with your actual EmailJS details
        const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;


        // Prepare template parameters based on your EmailJS template
        const templateParams = {
        to_name: "Eliram",
        name: form.name,
        email: form.email,
        message: form.message,
        };

        emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        )
        .then(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 4000);
            
            // Reset form
            setForm({
                name: '',
                email: '',
                message: '',
            });
        })
        .catch((error) => {
            setLoading(false);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 4000);
            console.error('Error sending email:', error);
        });
    };

    return (
        <section id="contact" className="min-h-screen bg-transparent relative overflow-hidden font-inter pt-16">
            <div className="container mx-auto px-4 py-16">
                <SectionHeader title="C O N T A C T" subtitle="GET IN TOUCH" position='start' />

                <div className="flex flex-col-reverse xl:flex-row gap-10 items-center pt-5">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full xl:w-1/2"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block font-light text-main mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900/70 dark:bg-gray-800 border border-transparent focus:border-main focus:ring-2 focus:ring-main/20 outline-none transition-colors duration-200 text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-light text-main mb-2">
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900/70 dark:bg-gray-800 border border-transparent focus:border-main focus:ring-2 focus:ring-main/20 outline-none transition-colors duration-200 text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-light text-main mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900/70 dark:bg-gray-800 border border-transparent focus:border-main focus:ring-2 focus:ring-main/20 outline-none transition-colors duration-200 resize-none text-white"
                                    required
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-6">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 bg-main text-white font-semibold rounded-lg hover:bg-main/80 transition-colors duration-200 w-full sm:w-auto"
                                    disabled={loading}
                                >
                                        {loading ? 'Sending...' : 'Send Message'}
                                </motion.button>
                                <div className="flex gap-4">
                                    <a 
                                        href="https://www.linkedin.com/in/eliram9/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 flex items-center justify-center text-main border border-main rounded-full hover:bg-main hover:text-white transition duration-300"
                                    >
                                        <FaLinkedinIn className="text-lg" />
                                    </a>
                                    <a 
                                        href="https://github.com/eliram9/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 flex items-center justify-center text-main border border-main rounded-full hover:bg-main hover:text-white transition duration-300"
                                    >
                                        <TbBrandGithubFilled className="text-lg" />
                                    </a>
                                </div>
                            </div>

                            <AnimatePresence>
                              {success && (
                                <motion.p
                                  key="success"
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.5 }}
                                  className="text-green-500 mt-4"
                                >
                                  Your message has been sent successfully!
                                </motion.p>
                              )}

                              {error && (
                                <motion.p
                                  key="error"
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.5 }}
                                  className="text-red-500 mt-4"
                                >
                                  Something went wrong. Please try again.
                                </motion.p>
                              )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full xl:w-1/2 h-[400px] xl:h-[600px]"
                    >
                        {/* Your 3D model component will go here */}
                        <div className="w-full h-full bg-transparent flex items-center justify-center">
                            {/* Replace this div with your 3D model component */}
                            <EarthCanvas />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;