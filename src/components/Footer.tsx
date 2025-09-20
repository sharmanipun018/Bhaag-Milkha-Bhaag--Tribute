import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-black border-t border-gray-800 py-16"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-1 gap-12 justify-center text-center">
          {/* Movie Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-red-500 tracking-wider mb-6 text-center w-full flex justify-center">
              BHAAG MILKHA BHAAG
            </h3>
            <p className="text-gray-400 leading-relaxed tracking-wide text-center">
              A tribute to the Flying Sikh, Milkha Singh. This biographical sports drama 
              celebrates the incredible journey of India's legendary athlete.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col items-center text-center">
          <p className="text-gray-500 text-sm tracking-widest text-center">
            © 2025 BHAAG MILKHA BHAAG. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-600 text-xs mt-2 tracking-wide text-center">
            Made with respect for the Flying Sikh
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
