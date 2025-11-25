import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    style={{ fontSize: '6rem', lineHeight: 1, marginBottom: '20px' }}
                >
                    WE CREATE <br />
                    <span className="gradient-text">DIGITAL MAGIC</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.4 }}
                    style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '40px', color: '#666' }}
                >
                    Premium marketing solutions for brands that dare to be different.
                </motion.p>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                >
                    <a href="#work" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>See Our Work</a>
                </motion.div>
            </div>

            {/* Abstract Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'linear-gradient(45deg, #007AFF, #B026FF)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: 0.5,
                    zIndex: -1
                }}
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    background: '#FF5F1F',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    opacity: 0.4,
                    zIndex: -1
                }}
            />
        </section>
    );
};

export default Hero;
