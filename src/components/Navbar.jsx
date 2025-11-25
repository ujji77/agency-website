import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="glass"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 0',
                zIndex: 100,
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>VIBE.</Link>
                <ul style={{ display: 'flex', gap: '30px' }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Link to="/contact" className="btn btn-primary">Let's Talk</Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
