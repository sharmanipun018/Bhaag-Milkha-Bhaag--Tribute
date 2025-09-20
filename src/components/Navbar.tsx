import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const location = useLocation();

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

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
                onClick={toggleMusic}
                className="text-white hover:text-red-400 transition-colors text-xl font-medium tracking-wide"
                aria-label="Toggle music"
            >
              {isPlaying ? 'MUTE' : 'UNMUTE'}
            </button>
            
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

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/assets/theme.mp3" type="audio/mpeg" />
      </audio>
    </motion.nav>
  );
};

export default Navbar;