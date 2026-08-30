import React from 'react';
import { SLAYER_CORPS_LOGO } from '../data/demonSlayerData';
import { NavTab } from '../types';
import { playSwordSlashSound } from '../utils/audio';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: NavTab) => {
    playSwordSlashSound('slash');
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/10 pt-12 pb-8 text-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Ticker: Total Concentration Respiratory Status */}
        <div className="p-3 rounded-sm bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9ECFD1] animate-pulse" />
            <span className="font-label-bold text-[#F5F5F5] uppercase tracking-[0.2em] text-[10px]">
              TOTAL CONCENTRATION BREATHING: CONSTANT (全集中 常中)
            </span>
          </div>
          <span className="text-[#C5A48A] font-mono text-[10px] tracking-wider">
            LUNG CAPACITY: 100% • BLOOD OXYGENATION: PEAK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm overflow-hidden border border-[#C5A48A]/50 bg-[#141414]">
                <img
                  src={SLAYER_CORPS_LOGO}
                  alt="Corps Seal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif-display text-xl text-[#F5F5F5] tracking-wider">
                Slayer's Chronicle
              </span>
            </div>
            <p className="text-xs text-white/50 font-sans leading-relaxed max-w-sm font-light">
              The premier digital compendium of the Demon Slayer Corps. Chronicling legendary swordsmen,
              breathing genealogies, and frontline tactical encounters against the Twelve Kizuki.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-label-bold">
            <div className="space-y-2">
              <span className="text-white/80 uppercase tracking-[0.2em] text-[10px] block mb-2 font-bold">
                SECTIONS
              </span>
              <button
                onClick={() => handleNav('home')}
                className="block text-white/50 hover:text-[#C5A48A] transition-colors uppercase tracking-wider text-[11px]"
              >
                HOME OVERVIEW
              </button>
              <button
                onClick={() => handleNav('slayers-wiki')}
                className="block text-white/50 hover:text-[#C5A48A] transition-colors uppercase tracking-wider text-[11px]"
              >
                SLAYERS WIKI
              </button>
              <button
                onClick={() => handleNav('breathing-styles')}
                className="block text-white/50 hover:text-[#C5A48A] transition-colors uppercase tracking-wider text-[11px]"
              >
                BREATHING STYLES
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-white/80 uppercase tracking-[0.2em] text-[10px] block mb-2 font-bold">
                ARCHIVES
              </span>
              <button
                onClick={() => handleNav('videos')}
                className="block text-white/50 hover:text-[#C5A48A] transition-colors uppercase tracking-wider text-[11px]"
              >
                COMBAT FOOTAGE
              </button>
              <button
                onClick={() => handleNav('fan-zone')}
                className="block text-white/50 hover:text-[#C5A48A] transition-colors uppercase tracking-wider text-[11px]"
              >
                FINAL SELECTION EXAM
              </button>
            </div>
          </div>

          {/* Kanji Seal */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-2">
            <div className="w-14 h-14 rounded-sm bg-[#141414] border border-[#C5A48A]/40 flex items-center justify-center shadow-lg">
              <span className="font-serif-display text-2xl text-[#C5A48A]">
                滅
              </span>
            </div>
            <span className="text-[9px] font-label-bold text-white/30 uppercase tracking-[0.25em]">
              METSU • DESTROY
            </span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/30 gap-2 font-light">
          <p>© Demon Slayer Corps Archive Repository. Kimetsu no Yaiba fan tribute & chronicle.</p>
          <p className="text-right">Total Concentration Constant Active</p>
        </div>
      </div>
    </footer>
  );
};
