import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode='wait'>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer style={{ background: '#111', color: '#666', padding: '40px 0', textAlign: 'center' }}>
            <p>&copy; 2025 Vibe Agency. All rights reserved.</p>
          </footer>
        </>
      )}
    </Router>
  );
}

export default App;
