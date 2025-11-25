import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="section" style={{ background: '#1a1a1a', color: 'white' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '3rem', marginBottom: '20px' }}
                >
                    Ready to make waves?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ fontSize: '1.5rem', marginBottom: '40px', maxWidth: '600px', color: '#ccc' }}
                >
                    Let's discuss your next project and how we can help you achieve your goals.
                </motion.p>
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <input
                        type="text"
                        placeholder="Name"
                        style={{ padding: '15px', borderRadius: '10px', border: 'none', background: '#333', color: 'white', fontSize: '1rem' }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={{ padding: '15px', borderRadius: '10px', border: 'none', background: '#333', color: 'white', fontSize: '1rem' }}
                    />
                    <textarea
                        placeholder="Message"
                        rows="5"
                        style={{ padding: '15px', borderRadius: '10px', border: 'none', background: '#333', color: 'white', fontSize: '1rem', resize: 'none' }}
                    ></textarea>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
