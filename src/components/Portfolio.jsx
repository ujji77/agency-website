import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { id: 1, title: 'Neon Dreams', category: 'Branding', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80' },
    { id: 2, title: 'Future Tech', category: 'Web Design', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80' },
    { id: 3, title: 'Urban Vibes', category: 'Photography', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },
    { id: 4, title: 'Eco Life', category: 'Marketing', img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80' },
];

const Portfolio = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '3rem', marginBottom: '60px' }}
                >
                    Selected Work
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="project-card"
                            style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '400px' }}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.6)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white'
                                }}
                            >
                                <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>{project.title}</h3>
                                <p style={{ fontSize: '1.2rem', color: '#ccc' }}>{project.category}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
