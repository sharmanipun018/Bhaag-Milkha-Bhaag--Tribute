import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="/poster.jpg"
        alt="Milkha Singh"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 2 }}
      />

      {/* Foreground Text & Progress */}
      <div className="relative text-center">
  {/* Title removed as requested */}

        {/* Subtitle - subtle style */}
        <motion.p
          className="text-gray-400 text-base italic tracking-wide mb-12 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Loading the legend...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 h-px bg-gray-800 mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-red-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
