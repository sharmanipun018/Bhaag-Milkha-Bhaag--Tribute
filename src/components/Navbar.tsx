import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { Menu, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {

  const location = useLocation();

  // Audio control is now global

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-full px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Movie Title - Top Left */}
          <Link to="/" className="text-2xl md:text-3xl font-bold text-red-500 hover:text-red-400 transition-colors tracking-wider">
            BHAAG MILKHA BHAAG
          </Link>

          {/* Controls - Top Right */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onMenuToggle}
              className="text-white hover:text-red-400 transition-colors text-xl font-medium tracking-wide"
              aria-label="Open menu"
            >
              MENU
            </button>
          </div>
        </div>
      </div>

    </motion.nav>
  );
};

export default Navbar;