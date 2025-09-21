import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  muted: boolean;
  toggleMute: () => void;
  setAudioSrc: (src: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [muted, setMuted] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
      if (!muted && audioSrc) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [muted, audioSrc]);

  return (
    <AudioContext.Provider value={{ muted, toggleMute: () => setMuted(m => !m), setAudioSrc }}>
      {children}
      <audio ref={audioRef} src={audioSrc} loop autoPlay style={{ display: 'none' }} />
    </AudioContext.Provider>
  );
}
