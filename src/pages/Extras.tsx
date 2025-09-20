import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Extras: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trailers');

  const trailers = [
    {
      title: 'OFFICIAL TRAILER',
      duration: '2:45',
      thumbnail: 'https://images.pexels.com/photos/33703/runner-running-long-distance-fitness.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'The official theatrical trailer showcasing the epic journey'
    },
    {
      title: 'CHARACTER SPOTLIGHT',
      duration: '1:30',
      thumbnail: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Behind the scenes with Farhan Akhtar\'s transformation'
    },
    {
      title: 'MAKING OF',
      duration: '5:20',
      thumbnail: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exclusive making-of documentary'
    }
  ];

  const clips = [
    {
      title: 'ROME OLYMPICS SCENE',
      duration: '4:15',
      thumbnail: 'https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The climactic Rome Olympics race'
    },
    {
      title: 'TRAINING MONTAGE',
      duration: '3:45',
      thumbnail: 'https://images.pexels.com/photos/1031588/pexels-photo-1031588.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Intensive training sequences'
    },
    {
      title: 'PARTITION FLASHBACK',
      duration: '6:30',
      thumbnail: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Powerful flashback to tragic events'
    }
  ];

  const tabs = [
    { id: 'trailers', label: 'TRAILERS' },
    { id: 'clips', label: 'CLIPS' },
    { id: 'behind', label: 'BEHIND SCENES' },
  ];

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'trailers': return trailers;
      case 'clips': return clips;
      case 'behind': return trailers; // Using trailers as placeholder
      default: return trailers;
    }
  };

  const VideoCard = ({ item, index }: { item: any, index: number }) => (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden bg-gray-900 cursor-pointer"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="text-white ml-1" size={24} />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 text-white text-sm tracking-wide">
          {item.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 tracking-wider group-hover:text-red-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
          {item.description}
        </p>
      </div>
    </motion.div>
  );

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
            EXTRAS
          </h1>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 font-light tracking-wide">
            Dive deeper into the making of the legend
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-8 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-medium tracking-widest transition-colors pb-2 border-b-2 ${
                activeTab === tab.id
                  ? 'text-red-500 border-red-500'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getCurrentContent().map((item, index) => (
            <VideoCard key={index} item={item} index={index} />
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-32 pt-16 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm tracking-widest">
            [VIDEO CONTENT PLACEHOLDER - READY FOR INTEGRATION]
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Extras;