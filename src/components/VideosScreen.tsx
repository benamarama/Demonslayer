import React, { useState } from 'react';
import { VideoItem } from '../types';
import { VIDEOS } from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface VideosScreenProps {
  onPlayVideo: (video: VideoItem) => void;
}

export const VideosScreen: React.FC<VideosScreenProps> = ({ onPlayVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'epic-battles' | 'breathing-tutorials'>('all');

  const featuredVideo = VIDEOS.find((v) => v.category === 'featured') || VIDEOS[0];
  const epicBattles = VIDEOS.filter((v) => v.category === 'epic-battles');
  const breathingTutorials = VIDEOS.filter((v) => v.category === 'breathing-tutorials');

  const displayedVideos =
    selectedCategory === 'all'
      ? VIDEOS.filter((v) => v.id !== featuredVideo.id)
      : VIDEOS.filter((v) => v.category === selectedCategory);

  const handleVideoClick = (video: VideoItem) => {
    if (video.videoType === 'thunder') playSwordSlashSound('thunder');
    else if (video.videoType === 'flame' || video.videoType === 'sun') playSwordSlashSound('fire');
    else if (video.videoType === 'water') playSwordSlashSound('water');
    else playSwordSlashSound('slash');

    onPlayVideo(video);
  };

  return (
    <div className="space-y-12 pb-20 animate-fadeIn">
      
      {/* Featured Hero Banner: Dance of the Fire God - Editorial Cover */}
      <section className="relative rounded-sm overflow-hidden min-h-[460px] sm:min-h-[520px] flex items-end p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl group bg-[#141414]">
        <div className="absolute inset-0 z-0">
          <img
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            className="w-full h-full object-cover filter brightness-75 contrast-110 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/90 via-[#0F0F0F]/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#C5A48A]/10 border border-[#C5A48A]/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A48A]" />
            <span className="font-label-bold text-[10px] text-[#C5A48A] tracking-[0.25em] uppercase">
              FEATURED ARCHIVE • {featuredVideo.subtitle}
            </span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] tracking-tight leading-tight">
            {featuredVideo.title}
          </h1>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-xl font-light">
            {featuredVideo.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => handleVideoClick(featuredVideo)}
              id="btn-play-featured-video"
              className="px-6 py-3.5 bg-[#C5A48A] hover:bg-[#E5D3C5] text-black font-label-bold text-xs tracking-[0.2em] uppercase rounded-sm shadow-[0_4px_20px_rgba(197,164,138,0.3)] active:scale-95 transition-all flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-[20px]">
                play_arrow
              </span>
              <span>WATCH ARCHIVE ({featuredVideo.duration})</span>
            </button>

            <span className="text-[10px] font-label-bold text-white/50 uppercase tracking-[0.2em] flex items-center gap-1.5 px-3.5 py-2.5 rounded-sm bg-[#141414]/90 border border-white/10">
              <span className="material-symbols-outlined text-[15px] text-[#C5A48A]">
                visibility
              </span>
              <span>{featuredVideo.views || '1.2M VIEWS'}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        {[
          { id: 'all', label: 'ALL COMBAT ARCHIVES' },
          { id: 'epic-battles', label: 'EPIC BATTLES' },
          { id: 'breathing-tutorials', label: 'BREATHING TUTORIALS' },
        ].map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                playSwordSlashSound('slash');
                setSelectedCategory(cat.id as any);
              }}
              className={`px-4 py-2 rounded-sm font-label-bold text-xs tracking-[0.16em] uppercase transition-all ${
                isActive
                  ? 'bg-[#C5A48A] text-black shadow-[0_0_10px_rgba(197,164,138,0.3)] font-bold'
                  : 'bg-[#141414] text-white/50 hover:text-white hover:bg-[#1E1E1E] border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Section 1: Epic Battles & Combat Footage */}
      {(selectedCategory === 'all' || selectedCategory === 'epic-battles') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C5A48A]" />
              <h2 className="font-serif-display text-2xl text-[#F5F5F5] tracking-tight">
                Epic Battles & Engagements
              </h2>
            </div>
            <span className="text-[10px] font-label-bold text-white/40 uppercase tracking-[0.2em]">
              HIGH IMPACT ENGAGEMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {epicBattles.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoClick(video)}
                id={`video-card-${video.id}`}
                className="group bg-[#141414] border border-white/10 hover:border-[#C5A48A]/60 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_8px_25px_rgba(197,164,138,0.15)] flex flex-col justify-between"
              >
                {/* Thumbnail with Play Overlay */}
                <div className="relative aspect-[16/10] bg-[#0A0A0A] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-sm bg-black/80 text-[10px] font-mono text-white border border-white/15">
                    {video.duration}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-black/60 border border-white/20 group-hover:border-[#C5A48A] group-hover:bg-[#C5A48A] group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xl">
                      <span className="material-symbols-outlined text-white group-hover:text-black text-[22px] ml-0.5">
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <p className="text-[10px] font-label-bold text-[#C5A48A] uppercase tracking-[0.2em]">
                    {video.subtitle}
                  </p>
                  <h3 className="font-serif-display text-base text-[#F5F5F5] group-hover:text-[#C5A48A] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 font-sans font-light">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Breathing Tutorials & Forms (4 Columns) */}
      {(selectedCategory === 'all' || selectedCategory === 'breathing-tutorials') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-[#9ECFD1]" />
              <h2 className="font-serif-display text-2xl text-[#F5F5F5] tracking-tight">
                Breathing Stances & Tutorials
              </h2>
            </div>
            <span className="text-[10px] font-label-bold text-white/40 uppercase tracking-[0.2em]">
              4 FORMS CATALOGED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {breathingTutorials.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoClick(video)}
                id={`tutorial-card-${video.id}`}
                className="group bg-[#141414] border border-white/10 hover:border-[#9ECFD1]/60 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_8px_25px_rgba(158,207,209,0.15)] flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] bg-[#0A0A0A] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />

                  {/* Form tag */}
                  {video.formTag && (
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-sm text-[9px] font-label-bold uppercase bg-[#0F0F0F]/90 text-[#9ECFD1] border border-[#9ECFD1]/40 tracking-wider">
                      {video.formTag}
                    </div>
                  )}

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-sm bg-black/80 text-[10px] font-mono text-white">
                    {video.duration}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/60 border border-white/20 group-hover:border-[#9ECFD1] group-hover:bg-[#9ECFD1] group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-xl">
                      <span className="material-symbols-outlined text-white group-hover:text-black text-[20px] ml-0.5">
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-sm text-[#F5F5F5] group-hover:text-[#9ECFD1] transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-white/50 font-sans line-clamp-2 mt-1 font-light">
                      {video.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-label-bold text-[#9ECFD1] tracking-wider">
                    <span>PRACTICE FORM</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
