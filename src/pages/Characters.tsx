import React from 'react';
import { motion } from 'framer-motion';

const Characters: React.FC = () => {
  const characters = [
    {
      name: 'MILKHA SINGH',
      actor: 'FARHAN AKHTAR',
      role: 'THE FLYING SIKH',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The legendary Indian track and field sprinter who overcame tremendous odds to become one of India\'s greatest athletes.'
    },
    {
      name: 'NIRMAL KAUR',
      actor: 'SONAM KAPOOR',
      role: 'THE LOVE',
      image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A strong-willed woman who becomes Milkha\'s emotional anchor and inspiration.'
    },
    {
      name: 'COACH RANVEER',
      actor: 'PAVAN MALHOTRA',
      role: 'THE MENTOR',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The dedicated coach who recognizes Milkha\'s potential and shapes him into a champion.'
    },
    {
      name: 'YOUNG MILKHA',
      actor: 'JAPTEJ SINGH',
      role: 'THE BEGINNING',
      image: 'https://images.pexels.com/photos/1031588/pexels-photo-1031588.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The young boy who witnesses the partition of India and loses his family.'
    }
  ];

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

        {/* Characters Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {characters.map((character, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-gray-900">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white tracking-wider mb-2">
                    {character.name}
                  </h3>
                  <p className="text-red-400 font-medium tracking-wide mb-1">
                    {character.actor}
                  </p>
                  <p className="text-sm text-gray-400 tracking-wide mb-4">
                    {character.role}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {character.description}
                  </p>
                </div>
              </div>
            </motion.div>
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
            "I will run like I have never run before."
          </blockquote>
          <cite className="text-red-500 text-sm tracking-widest">— MILKHA SINGH</cite>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Characters;