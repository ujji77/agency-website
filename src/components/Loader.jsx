import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      className="loader"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 2 }}
      onAnimationComplete={() => setLoading(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        color: '#fff',
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: '4rem', fontWeight: 'bold' }}
      >
        VIBE AGENCY
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
