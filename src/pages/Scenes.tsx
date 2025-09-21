import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Example video files (replace with your own in /assets)
const sceneVideos = [
  '/assets/scene1.mp4',
  '/assets/scene2.mp4',
  '/assets/scene3.mp4',
  '/assets/scene4.mp4',
  '/assets/scene5.mp4',
];

const Scenes: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Only play the video that is most visible in the viewport
    let ratios = Array(videoRefs.current.length).fill(0);
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const idx = videoRefs.current.findIndex(v => v === entry.target);
        if (idx !== -1) {
          ratios[idx] = entry.intersectionRatio;
        }
      });
      // Find the video with the highest ratio
      let mostVisibleIdx = ratios.indexOf(Math.max(...ratios));
      videoRefs.current.forEach((video, idx) => {
        if (!video) return;
        if (idx === mostVisibleIdx && ratios[idx] > 0.5) {
          video.muted = false;
          video.play().catch(() => {});
        } else {
          video.muted = true;
          video.pause();
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: Array.from({length: 21}, (_, i) => i * 0.05),
    });
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-widest mb-6">
            SCENES
          </h1>
          <div className="w-24 h-px bg-red-500 mx-auto"></div>
          <p className="text-xl text-gray-400 font-light tracking-wide max-w-3xl mx-auto mt-6">
            Watch memorable moments and iconic scenes from the film.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {sceneVideos.map((src, idx) => (
            <div key={src} className="bg-black rounded-3xl overflow-hidden shadow-2xl border-0 w-full">
              <video
                ref={el => videoRefs.current[idx] = el}
                src={src}
                autoPlay
                loop
                playsInline
                className="w-full h-[420px] md:h-[520px] object-cover rounded-3xl"
                poster={`/assets/scene${idx + 1}-thumb.jpg`}
              />
              <div className="p-4 text-center">
                <span className="text-white text-xl font-bold tracking-wider">SCENE {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Scenes;
