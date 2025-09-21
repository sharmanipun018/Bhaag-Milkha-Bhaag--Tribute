import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: '/', label: 'HOME' },
    { path: '/characters', label: 'CHARACTERS' },
    { path: '/story', label: 'STORY' },
    { path: '/scenes', label: 'SCENES' },
    { path: '/conclusion', label: 'CONCLUSION' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center overflow-y-auto"
          style={{ minHeight: '100vh' }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:text-red-400 transition-colors text-sm font-medium tracking-wide"
          >
            CLOSE
          </button>

          {/* Menu Content - always centered and scrollable if needed */}
          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-7xl md:text-9xl font-bold text-red-500 mb-16 tracking-wider break-words mt-12">
                MENU
              </h2>
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                        className="block text-3xl md:text-4xl font-light text-white hover:text-red-400 transition-colors tracking-widest py-2"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 pt-8 border-t border-gray-800"
              >
                <p className="text-gray-400 text-sm tracking-wide">
                  "There is no finish line."
                </p>
                <p className="text-red-500 text-xs mt-2 tracking-wider">
                  — MILKHA SINGH
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;