import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Conclusion: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-24 pb-12 flex items-center justify-center"
    >
      <div className="w-full max-w-4xl mx-auto">
        <video
          ref={videoRef}
          src="/assets/message.mp4"
          autoPlay
          loop
          playsInline
          className="w-full h-[420px] md:h-[520px] object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </motion.div>
  );
};

export default Conclusion;
