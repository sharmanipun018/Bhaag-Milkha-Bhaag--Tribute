import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  const storyChapters = [
    {
      title: 'THE PARTITION',
      year: '1947',
      content: 'Born in 1929 in Govindpura, Milkha Singh\'s childhood was shattered by the partition of India in 1947. He witnessed the brutal murder of his parents and siblings, an event that would haunt him but also fuel his determination to excel.'
    },
    {
      title: 'FINDING PURPOSE',
      year: '1952',
      content: 'After joining the Indian Army in 1952, Milkha discovered his incredible talent for running. What started as a way to stay fit became his calling. His first victory came at a cross-country race, marking the beginning of an extraordinary journey.'
    },
    {
      title: 'THE FLYING SIKH',
      year: '1958',
      content: 'Milkha Singh earned his nickname "The Flying Sikh" after defeating Abdul Khaliq of Pakistan in a 200m race in 1958. He went on to win gold medals at the Asian Games and Commonwealth Games, becoming India\'s first individual athletics gold medalist.'
    },
    {
      title: 'ROME OLYMPICS',
      year: '1960',
      content: 'The 1960 Rome Olympics represented both triumph and heartbreak. Milkha finished 4th in the 400m final, missing a medal by a whisker. This near-miss became his greatest regret, but his performance inspired millions of Indians.'
    }
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Page Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-32"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest mb-6">
            THE STORY
          </h1>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 font-light tracking-wide max-w-3xl mx-auto">
            From tragedy to triumph, the extraordinary journey of India's greatest athlete
          </p>
        </motion.div>

        {/* Story Chapters */}
        <div className="space-y-32">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Year */}
              <div className="lg:w-1/3">
                <div className="text-8xl md:text-9xl font-bold text-red-500/20 mb-4">
                  {chapter.year}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-8">
                  {chapter.title}
                </h2>
                <div className="w-16 h-px bg-red-500 mb-8"></div>
                <p className="text-lg text-gray-300 leading-relaxed font-light tracking-wide">
                  {chapter.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legacy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-32 pt-32 border-t border-gray-800"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-widest mb-12">
            THE LEGACY
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed font-light tracking-wide mb-12">
              Milkha Singh's story transcends sports. It's about resilience, determination, and the 
              human spirit's ability to overcome the darkest of circumstances. His legacy continues 
              to inspire athletes and ordinary people alike to chase their dreams relentlessly.
            </p>
            
            <blockquote className="text-3xl md:text-4xl font-light text-red-400 italic mb-6 tracking-wide">
              "I have seen poverty, death, and despair. But I have also seen the power of dreams 
              and the strength that comes from never giving up."
            </blockquote>
            
            <cite className="text-gray-500 text-sm tracking-widest">— MILKHA SINGH, THE FLYING SIKH</cite>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Story;