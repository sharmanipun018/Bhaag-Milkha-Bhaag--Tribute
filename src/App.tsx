import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import MenuOverlay from './components/MenuOverlay';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Story from './pages/Story';
import Scenes from './pages/Scenes';
import Conclusion from './pages/Conclusion';

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.pathname === '/') {
        const scrollY = window.scrollY;
        // Fade starts 100px after 'SIKH' appears (which is at 320px)
        const fadeStart = 420; // 320 + 100
        const fadeEnd = 820;   // fade over 400px
        if (scrollY < fadeStart) {
          setNavbarOpacity(1);
        } else if (scrollY > fadeEnd) {
          setNavbarOpacity(0);
        } else {
          setNavbarOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
        }
      } else {
        setNavbarOpacity(1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <motion.div
          animate={{ opacity: navbarOpacity }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ pointerEvents: navbarOpacity === 0 ? 'none' : 'auto' }}
        >
          <Navbar onMenuToggle={() => setMenuOpen(!menuOpen)} />
        </motion.div>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/story" element={<Story />} />
            <Route path="/scenes" element={<Scenes />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <MenuOverlay 
          isOpen={menuOpen} 
          onClose={() => setMenuOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;