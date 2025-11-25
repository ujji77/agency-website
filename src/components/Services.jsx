import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaChartLine, FaCode } from 'react-icons/fa';

const services = [
    { icon: <FaRocket />, title: 'Brand Strategy', desc: 'We build brands that stand out and speak loud.' },
    { icon: <FaLightbulb />, title: 'Creative Design', desc: 'Stunning visuals that capture attention and hearts.' },
    { icon: <FaCode />, title: 'Web Development', desc: 'Fast, responsive, and beautiful websites.' },
    { icon: <FaChartLine />, title: 'Digital Marketing', desc: 'Data-driven strategies to grow your business.' },
];

const Services = () => {
    return (
        <section className="section" style={{ background: '#f9f9f9' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '3rem', marginBottom: '60px', textAlign: 'center' }}
                >
                    Our Expertise
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'white',
                                padding: '40px',
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ fontSize: '3rem', color: '#007AFF', marginBottom: '20px' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
