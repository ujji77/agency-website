import React from 'react';
import ContactComponent from '../components/Contact';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '4rem', marginBottom: '40px', textAlign: 'center' }}
                >
                    Get in Touch
                </motion.h1>
            </div>
            <ContactComponent />
        </div>
    );
};

export default Contact;
