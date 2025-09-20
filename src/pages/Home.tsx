import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [showThe, setShowThe] = useState(false);
  const [showFlying, setShowFlying] = useState(false);
  const [showSikh, setShowSikh] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    // Custom gallery images
    const galleryImages = [
      '/assets/photo1.jpg',
      '/assets/photo2.jpg',
      '/assets/photo3.jpg',
      '/assets/photo4.jpg',
    ];
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  setShowThe(scrollY > 200);
  setShowFlying(scrollY > 200);
  setShowSikh(scrollY > 200);
      setShowGallery(scrollY > 700); // Show gallery after heading is revealed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Play audio when homepage loads
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  // Toggle mute/unmute
  const handleMute = () => {
    setIsMuted(true);
    if (audioRef.current) audioRef.current.muted = true;
  };
  const handleUnmute = () => {
    setIsMuted(false);
    if (audioRef.current) audioRef.current.muted = false;
  };

  return (
  <div className="relative min-h-[190vh] bg-black overflow-x-hidden">
      {/* Fixed Poster */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("/poster.jpg")',
        }}
      />

      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10" />

      {/* Background music audio element */}
      <audio
        ref={audioRef}
        src="/bg-music.mp3"
        autoPlay
        loop
        muted={isMuted}
        style={{ display: 'none' }}
      />

      {/* Content that scrolls over the poster */}
      <div className="relative z-20">
        {/* Spacer to show poster first */}
        <div className="h-screen flex items-center justify-center" />

        {/* Reveal words one by one on scroll */}
        <div className="w-full" style={{ height: '10rem' }} />
  <div className="flex items-center justify-center space-x-16 min-h-[12rem]">
          {/* THE: slides in from left, but starts closer to final spot */}
          <div className="min-w-[8ch] flex justify-center">
            {showThe ? (
              <motion.span
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white"
                style={{ whiteSpace: 'nowrap' }}
              >
                THE
              </motion.span>
            ) : (
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-transparent select-none">THE</span>
            )}
          </div>
          {/* FLYING: slides in from bottom, but starts closer to final spot */}
          <div className="min-w-[12ch] flex justify-center">
            {showFlying ? (
              <motion.span
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-red-500"
                style={{ whiteSpace: 'nowrap' }}
              >
                FLYING
              </motion.span>
            ) : (
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-transparent select-none">FLYING</span>
            )}
          </div>
          {/* SIKH: slides in from right to its final spot */}
          <div className="min-w-[8ch] flex justify-center">
            {showSikh ? (
              <motion.span
                initial={{ opacity: 0, x: '100vw' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white"
                style={{ whiteSpace: 'nowrap' }}
              >
                SIKH
              </motion.span>
            ) : (
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-transparent select-none">SIKH</span>
            )}
          </div>
        </div>
        {/* Add large space between heading and gallery */}
        <div style={{ height: '320px' }} />
        {showGallery && (
          <div className="w-full">
            {galleryImages.map((src, idx) => (
              <section
                key={src}
                className="min-h-[100vh] flex items-center justify-center snap-center"
                style={{ scrollSnapAlign: 'center', margin: 0, padding: 0 }}
              >
                <div className="relative w-full h-[100vh] mx-auto bg-black overflow-hidden flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-center">
                    <span className="text-white text-3xl font-bold tracking-wider">PHOTO {idx + 1}</span>
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
