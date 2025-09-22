import React from 'react';
import { motion } from 'framer-motion';

const Characters: React.FC = () => {
  const characters = [
    {
      name: 'MILKHA SINGH',
      actor: 'FARHAN AKHTAR',
      role: 'THE FLYING SIKH',
      image: '/assets/character1.jpg',
      description: 'The legendary Indian track and field sprinter who overcame tremendous odds to become one of India\'s greatest athletes.'
    },
    {
      name: 'NIRMAL KAUR',
      actor: 'SONAM KAPOOR',
      role: 'THE LOVE',
      image: '/assets/character2.jpg',
      description: 'A strong-willed woman who becomes Milkha\'s emotional anchor and inspiration.'
    },
    {
      name: 'COACH RANVEER',
      actor: 'PAVAN MALHOTRA',
      role: 'THE MENTOR',
      image: '/assets/character3.jpg',
      description: 'The dedicated coach who recognizes Milkha\'s potential and shapes him into a champion.'
    },
    {
      name: 'YOUNG MILKHA',
      actor: 'JAPTEJ SINGH',
      role: 'THE BEGINNING',
      image: '/assets/character4.jpg',
      description: 'The young boy who witnesses the partition of India and loses his family.'
    }
  ];


  // Responsive grid: 2 columns on md+
  // On hover, expand hovered card, shrink adjacent
  // Card width: default 50%, hovered 65%, adjacent 35%
  // On mobile, fallback to stacking

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Page Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest mb-6">
            CHARACTERS
          </h1>
          <div className="w-24 h-px bg-red-500 mx-auto"></div>
        </motion.div>

        {/* Characters Grid - 2x2, aesthetic card styling */}
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-1 md:gap-y-8 gap-4">
          {characters.map((character, index) => (
            <div
              key={index}
              className="group bg-black rounded-3xl overflow-hidden flex flex-col justify-end shadow-2xl border-0 min-h-[350px] md:min-h-[400px] w-full md:w-[85%] transition-transform duration-300"
            >
              <div className="relative w-full h-[400px] md:h-[450px]">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl"
                />
                {/* Name overlay, only visible on hover */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-20 md:h-24 bg-black/70 rounded-b-3xl">
                  <span className="text-3xl md:text-4xl font-extrabold text-red-500 tracking-widest" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em' }}>
                    {character.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-32"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-400 italic mb-4 tracking-wide">
            "I will run like I have never run before "
          </blockquote>
          <cite className="text-red-500 text-sm tracking-widest">— MILKHA SINGH</cite>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Characters;