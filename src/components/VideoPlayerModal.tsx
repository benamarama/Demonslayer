import React, { useState, useEffect } from 'react';
import { VideoItem } from '../types';
import { playSwordSlashSound } from '../utils/audio';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  onClose
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    if (!video) return;
    setIsPlaying(true);
    setProgress(15);
  }, [video]);

  // Simulate progress bar advancing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!video) return null;

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (video.videoType === 'thunder') playSwordSlashSound('thunder');
      else if (video.videoType === 'flame' || video.videoType === 'sun') playSwordSlashSound('fire');
      else if (video.videoType === 'water') playSwordSlashSound('water');
      else playSwordSlashSound('slash');
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#141414] border border-[#C5A48A]/40 rounded-sm overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.9)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F0F0F] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A48A]" />
            <div>
              <span className="text-[10px] font-label-bold text-[#C5A48A] uppercase tracking-[0.2em] block">
                CORPS COMBAT ARCHIVE • {video.subtitle}
              </span>
              <h3 className="font-serif-display text-base text-[#F5F5F5] leading-tight">
                {video.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              playSwordSlashSound('click');
              onClose();
            }}
            id="btn-close-video-modal"
            className="w-8 h-8 rounded-sm bg-[#1E1E1E] hover:bg-[#C5A48A] text-white/40 hover:text-black transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[18px]">
              close
            </span>
          </button>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover filter ${isPlaying ? 'brightness-100' : 'brightness-75'} transition-all duration-300`}
            referrerPolicy="no-referrer"
          />

          {/* Animated Overlay Effects */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-sm bg-black/60 border border-[#C5A48A]/40 backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A48A] animate-pulse" />
                <span className="font-label-bold text-[9px] text-[#C5A48A] tracking-[0.2em] uppercase">
                  RECORDING 1080P • TOTAL CONCENTRATION ACTIVE
                </span>
              </div>
            </div>
          )}

          {/* Center Play/Pause Trigger */}
          <button
            onClick={togglePlay}
            className={`w-16 h-16 rounded-full bg-black/60 border border-[#C5A48A] text-[#C5A48A] hover:bg-[#C5A48A] hover:text-black flex items-center justify-center transition-all duration-300 shadow-2xl ${
              isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
            }`}
          >
            <span className="material-symbols-outlined text-[32px] ml-0.5">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
        </div>

        {/* Playback Controls Bar */}
        <div className="p-4 sm:p-5 bg-[#0F0F0F] border-t border-white/10 space-y-3">
          
          {/* Progress Bar */}
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress((clickX / rect.width) * 100);
            }}
            className="w-full h-1.5 bg-[#1C1C1C] rounded-full cursor-pointer overflow-hidden border border-white/10 group relative"
          >
            <div
              className="h-full bg-[#C5A48A] rounded-full relative"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-sm bg-[#181818] hover:bg-[#C5A48A] text-white hover:text-black transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] block">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <button
                onClick={() => {
                  if (video.videoType === 'thunder') playSwordSlashSound('thunder');
                  else if (video.videoType === 'flame' || video.videoType === 'sun') playSwordSlashSound('fire');
                  else if (video.videoType === 'water') playSwordSlashSound('water');
                  else playSwordSlashSound('slash');
                }}
                className="px-3 py-1.5 rounded-sm bg-[#181818] hover:bg-[#222] text-[#C5A48A] text-xs font-label-bold flex items-center gap-1.5 border border-white/10 tracking-wider"
              >
                <span className="material-symbols-outlined text-[14px]">
                  swords
                </span>
                <span>NICHIRIN CLASH SFX</span>
              </button>

              <span className="text-xs font-mono text-white/40">
                {Math.floor((progress / 100) * 8)}:
                {Math.floor(((progress / 100) * 45) % 60)
                  .toString()
                  .padStart(2, '0')}{' '}
                / {video.duration}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-white/40">
                  volume_up
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 accent-[#C5A48A]"
                />
              </div>

              <span className="px-2.5 py-1 rounded-sm bg-[#141414] border border-white/10 text-[9px] font-mono text-[#9ECFD1] tracking-wider">
                ARCHIVE VERIFIED
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-white/60 font-sans pt-1 font-light">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};
