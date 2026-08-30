import React from 'react';
import { Character, NavTab, VideoItem } from '../types';
import {
  HOME_HERO_BG,
  CHARACTERS,
  VIDEOS
} from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface HomeScreenProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectCharacter: (char: Character) => void;
  onPlayVideo: (video: VideoItem) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  setActiveTab,
  onSelectCharacter,
  onPlayVideo,
}) => {
  const tanjiro = CHARACTERS.find((c) => c.id === 'tanjiro') || CHARACTERS[0];
  const giyu = CHARACTERS.find((c) => c.id === 'giyu');
  const muzan = CHARACTERS.find((c) => c.id === 'muzan');
  const kokushibo = CHARACTERS.find((c) => c.id === 'kokushibo');
  const akaza = CHARACTERS.find((c) => c.id === 'akaza');

  const allHashiras = CHARACTERS.filter((c) => c.category === 'hashira');
  const upperMoons = CHARACTERS.filter((c) => c.category === 'upper-moon');

  const popularFormCards = [
    {
      id: 'water-surface-form',
      title: 'FIRST FORM: WATER SURFACE SLASH',
      style: 'Water Breathing',
      user: 'Tanjiro Kamado',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOq4lyGtxU3fFsOKGUEPvBcocfq0bfPjIMD4B81ewCVjhjm6O5YIkpKjArf-EKR94n8jrQUb2QPBQmRQ5MSYZUwh2vACmiQlXEp-b1LeHdE_q04oZjOFG1aYzAp7Y93Sda5DsMDWHMkWxLJqpZngdBweMJKzMEUem1zVnTqcSMNTYR_pR-TiWCY-hHtiQRvoRkf6NXnHuf_NC5fuXUfk9tM4fj_DTc1It9zz6zJsdUpLCKl1UVlGoY',
      tag: 'Form 01',
      tagColor: '#9ecfd1',
      videoMatch: VIDEOS.find((v) => v.id === 'tutorial-water-surface') || VIDEOS[0]
    },
    {
      id: 'hinokami-dance-form',
      title: 'HINOKAMI KAGURA: DANCE',
      style: 'Sun Breathing',
      user: 'Tanjiro Kamado',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh1h3kAssoIkRmEjB_ke1NSggf6X-YHSVfzzvzGeQbcX7G0-Oaq_f0UYD7FRqI-vz5KIqDaJyGOB6w9L0mJtuYPF9t2SQJR5lC3dEz9EWhcXgs8Uc1si9-SUqPcQDo3Xvy_g6n3UBjjo-6puT9zP3cU3Jx6OjgGgdc8B1N3XDpEmxt_Xje2F0Lj4gA1aDRhkjxynxgQWxOYyqIYCEuqfx3kiRedXhbm8grtGdAn8Z6nrLGvvX0cSeK',
      tag: 'Dance',
      tagColor: '#ff535b',
      videoMatch: VIDEOS.find((v) => v.id === 'dance-fire-god') || VIDEOS[0]
    },
    {
      id: 'thunderclap-form',
      title: 'FIRST FORM: THUNDERCLAP & FLASH',
      style: 'Thunder Breathing',
      user: 'Zenitsu Agatsuma',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnd8YJ3BoMq085RNUR5N9L2rJPT2JqXlhYdaPwmcH-wUGBZOp9CN5RVv5HW0caR6QlqCbe6hDp3rGxQhheMujsEOx95-v0RYfh97di9WwUb_YpFeIky0EKWmbcnFvr1Mx0X9ITHQ0lsaoZeqjmwmJN0TxQDIF7nEku2Owd4Fx6fnyPza0o0ac_KZC01iwNsrEzKN67yzYn9lANt3xQQnmpiXZNW_mEkwGrT-FLXZ19Vd0QCzcj2YhD',
      tag: 'Form 01',
      tagColor: '#facc15',
      videoMatch: VIDEOS.find((v) => v.id === 'thunderclap-sixfold') || VIDEOS[2]
    }
  ];

  return (
    <div className="space-y-12 pb-16 animate-fadeIn">
      
      {/* Top Hero Banner - Editorial Cover Style */}
      <section className="relative rounded-sm overflow-hidden min-h-[440px] sm:min-h-[500px] flex items-end p-6 sm:p-10 lg:p-14 border border-white/10 bg-[#141414] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={HOME_HERO_BG}
            alt="Demon Slayer Corps Headquarters Moonlight"
            className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/90 via-[#0F0F0F]/40 to-transparent" />
        </div>

        {/* Hero Copy */}
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#C5A48A]/10 border border-[#C5A48A]/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A48A]" />
            <span className="font-label-bold text-[10px] text-[#C5A48A] tracking-[0.25em] uppercase">
              OFFICIAL ARCHIVE COMPENDIUM • VOL. IV
            </span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] tracking-tight leading-[1.05]">
            Slayer's <span className="italic text-[#C5A48A]">Chronicle</span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-xl font-light">
            The sanctioned compendium of the Demon Slayer Corps. Explore tactical combat dossiers, the 9 Hashiras, the Twelve Kizuki & Demon King archives, breathing genealogies, and combat footage.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => {
                playSwordSlashSound('slash');
                setActiveTab('slayers-wiki');
              }}
              id="hero-btn-explore-slayers"
              className="px-5 py-3 bg-[#C5A48A] hover:bg-[#E5D3C5] text-black font-label-bold text-xs tracking-[0.2em] uppercase rounded-sm shadow-[0_4px_16px_rgba(197,164,138,0.25)] active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                shield_person
              </span>
              <span>EXPLORE DOSSIERS</span>
            </button>

            <button
              onClick={() => {
                playSwordSlashSound('fire');
                setActiveTab('demons-wiki');
              }}
              id="hero-btn-explore-demons"
              className="px-5 py-3 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800/60 font-label-bold text-xs tracking-[0.2em] uppercase rounded-sm shadow-[0_4px_16px_rgba(220,38,38,0.2)] active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                swords
              </span>
              <span>TWELVE KIZUKI</span>
            </button>

            <button
              onClick={() => {
                playSwordSlashSound('fire');
                setActiveTab('videos');
              }}
              id="hero-btn-watch-combat"
              className="px-5 py-3 bg-[#141414]/90 hover:bg-[#1E1E1E] text-white/90 hover:text-[#C5A48A] border border-white/20 hover:border-[#C5A48A]/50 font-label-bold text-xs tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                play_circle
              </span>
              <span>COMBAT FOOTAGE</span>
            </button>
          </div>
        </div>
      </section>

      {/* The 9 Hashiras Gallery Section */}
      <section className="bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C5A48A]" />
              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight">
                The 9 Hashiras (柱)
              </h2>
            </div>
            <p className="text-[10px] text-white/40 font-label-bold tracking-[0.2em] uppercase">
              THE GREATEST SWORDSMEN OF THE TAISHO ERA
            </p>
          </div>

          <button
            onClick={() => {
              playSwordSlashSound('slash');
              setActiveTab('slayers-wiki');
            }}
            className="text-xs font-label-bold text-[#C5A48A] hover:text-white flex items-center gap-1 uppercase tracking-wider"
          >
            <span>VIEW ALL IN WIKI</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* 9 Hashira Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3">
          {allHashiras.map((hashira) => (
            <div
              key={hashira.id}
              onClick={() => {
                playSwordSlashSound('slash');
                onSelectCharacter(hashira);
              }}
              className="bg-[#181818] border border-white/5 hover:border-[#C5A48A] rounded-sm overflow-hidden p-2 group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between text-center"
            >
              <div className="relative aspect-square w-full rounded-xs overflow-hidden bg-black mb-2 border border-white/10">
                <img
                  src={hashira.cardImage}
                  alt={hashira.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1 right-1 px-1 py-0.2 bg-black/80 rounded-xs text-[8px] font-mono text-[#C5A48A] font-bold">
                  {hashira.rankKanji}
                </div>
              </div>

              <div>
                <h4 className="font-serif-display text-xs text-white group-hover:text-[#C5A48A] transition-colors truncate">
                  {hashira.name.split(' ')[0]}
                </h4>
                <p className="text-[9px] text-white/40 truncate font-mono">
                  {hashira.rank.replace(' Hashira', '')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clash Spotlight: Tanjiro & Giyu vs Akaza & Upper Moons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Tanjiro & Giyu Card (6 Cols) */}
        <div className="lg:col-span-6 bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-[#C5A48A] text-[9px] font-label-bold text-black tracking-[0.2em] uppercase rounded-sm">
                WATER & SUN BREATHING
              </span>
              <span className="text-xs text-white/40 font-mono">
                CORPS VANGUARD
              </span>
            </div>

            <div>
              <h2 className="font-serif-display text-3xl text-[#F5F5F5]">
                Giyu Tomioka & Tanjiro
              </h2>
              <p className="text-xs text-[#C5A48A] font-label-bold tracking-[0.16em] uppercase mt-1">
                Dead Calm (11th Form) • Hinokami Kagura
              </p>
            </div>

            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              Master and disciple of the Water Breathing genealogy. Together in the Infinity Castle, their combined mastery of absolute defense and solar heat strikes achieved the pinnacle of swordsmanship.
            </p>

            {giyu && (
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-12 rounded-sm overflow-hidden border border-[#C5A48A]/40 flex-shrink-0">
                  <img
                    src={giyu.cardImage}
                    alt={giyu.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-serif-display text-sm text-white">Giyu Tomioka</div>
                  <div className="text-[10px] text-white/40 font-mono">Water Hashira (水柱)</div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 flex gap-3">
            {giyu && (
              <button
                onClick={() => {
                  playSwordSlashSound('water');
                  onSelectCharacter(giyu);
                }}
                className="flex-1 py-2.5 bg-[#1E1E1E] hover:bg-[#C5A48A] text-white hover:text-black border border-white/10 rounded-sm font-label-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
              >
                <span>GIYU DOSSIER</span>
              </button>
            )}
            <button
              onClick={() => {
                playSwordSlashSound('slash');
                onSelectCharacter(tanjiro);
              }}
              className="flex-1 py-2.5 bg-[#C5A48A] hover:bg-[#E5D3C5] text-black rounded-sm font-label-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
            >
              <span>TANJIRO DOSSIER</span>
            </button>
          </div>
        </div>

        {/* The Demon King & Upper Kizuki Card (6 Cols) */}
        <div className="lg:col-span-6 bg-[#141414] border border-red-900/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-red-600 text-[9px] font-label-bold text-white tracking-[0.2em] uppercase rounded-sm">
                THE TWELVE KIZUKI • 十二鬼月
              </span>
              <span className="text-xs text-red-400 font-mono">
                UPPER RANKS
              </span>
            </div>

            <div>
              <h2 className="font-serif-display text-3xl text-[#F5F5F5] group-hover:text-red-300 transition-colors">
                Muzan & The Upper Moons
              </h2>
              <p className="text-xs text-red-400 font-label-bold tracking-[0.16em] uppercase mt-1">
                Kokushibo (壱) • Doma (弐) • Akaza (参) • Zohakuten (肆)
              </p>
            </div>

            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              Centuries of cellular evolution granted the Upper Moons insurmountable power. Explore the complete profiles, Blood Demon Arts, and kill protocols for every member of the Kizuki.
            </p>

            {muzan && kokushibo && (
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-12 rounded-sm overflow-hidden border border-red-600/60 flex-shrink-0">
                  <img
                    src={muzan.cardImage}
                    alt={muzan.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-12 h-12 rounded-sm overflow-hidden border border-purple-600/60 flex-shrink-0">
                  <img
                    src={kokushibo.cardImage}
                    alt={kokushibo.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-serif-display text-sm text-white">Muzan & Kokushibo</div>
                  <div className="text-[10px] text-red-400 font-mono">Progenitor & Upper Rank 1</div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 flex gap-3">
            {muzan && (
              <button
                onClick={() => {
                  playSwordSlashSound('fire');
                  onSelectCharacter(muzan);
                }}
                className="flex-1 py-2.5 bg-red-950 hover:bg-red-900 text-red-200 border border-red-800/50 rounded-sm font-label-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
              >
                <span>MUZAN DOSSIER</span>
              </button>
            )}
            <button
              onClick={() => {
                playSwordSlashSound('fire');
                setActiveTab('demons-wiki');
              }}
              className="flex-1 py-2.5 bg-[#1E1E1E] hover:bg-red-950 text-white hover:text-red-200 border border-white/10 rounded-sm font-label-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
            >
              <span>ALL 12 KIZUKI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mastered Forms Stances Row */}
      <section className="bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-[#C5A48A]" />
              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight">
                Fundamental Combat Forms
              </h3>
            </div>
            <p className="text-[10px] text-white/40 font-label-bold tracking-[0.2em] uppercase">
              POPULAR BREATHING TECHNIQUES & STANCES
            </p>
          </div>

          <button
            onClick={() => {
              playSwordSlashSound('slash');
              setActiveTab('breathing-styles');
            }}
            className="text-xs font-label-bold text-[#C5A48A] hover:text-white flex items-center gap-1 uppercase tracking-wider"
          >
            <span>VIEW ALL 14 STYLES</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularFormCards.map((card) => (
            <div
              key={card.id}
              onClick={() => {
                playSwordSlashSound('slash');
                onPlayVideo(card.videoMatch);
              }}
              id={`card-form-${card.id}`}
              className="bg-[#181818] border border-white/10 hover:border-[#C5A48A] rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-sm bg-[#C5A48A] text-black flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-2xl">
                      play_arrow
                    </span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-black/70 backdrop-blur-sm border border-white/10 text-[9px] font-label-bold text-white tracking-widest uppercase">
                  {card.tag}
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="text-[10px] font-label-bold text-[#C5A48A] uppercase tracking-wider">
                  {card.style} • {card.user}
                </div>
                <h4 className="font-serif-display text-sm text-[#F5F5F5] group-hover:text-[#C5A48A] transition-colors leading-tight">
                  {card.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
