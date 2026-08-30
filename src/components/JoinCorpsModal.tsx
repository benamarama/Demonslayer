import React, { useState } from 'react';
import { SLAYER_CORPS_LOGO } from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface JoinCorpsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinCorpsModal: React.FC<JoinCorpsModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [breathingStyle, setBreathingStyle] = useState('Water Breathing');
  const [customBladeColor, setCustomBladeColor] = useState('Crimson Red');
  const [issuedCard, setIssuedCard] = useState(false);

  if (!isOpen) return null;

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    playSwordSlashSound('slash');
    setIssuedCard(true);
  };

  const handleReset = () => {
    setIssuedCard(false);
    setName('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#141414] border border-[#C5A48A]/40 rounded-sm overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSwordSlashSound('click');
            onClose();
          }}
          className="absolute top-5 right-5 w-8 h-8 rounded-sm bg-[#1E1E1E] hover:bg-[#C5A48A] text-white/40 hover:text-black transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[18px]">
            close
          </span>
        </button>

        {!issuedCard ? (
          <form onSubmit={handleEnroll} className="space-y-5">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-sm overflow-hidden border border-[#C5A48A] p-1 bg-[#0F0F0F]">
                <img
                  src={SLAYER_CORPS_LOGO}
                  alt="Corps Seal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight">
                Enlist in the Corps
              </h2>
              <p className="text-xs text-white/50 font-sans font-light">
                Register candidate credentials to receive an official Demon Slayer identification badge.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-label-bold text-white/50 uppercase tracking-[0.2em] mb-1.5">
                  SLAYER NAME / ALIAS
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 focus:border-[#C5A48A] rounded-sm text-sm text-[#F5F5F5] placeholder-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-label-bold text-white/50 uppercase tracking-[0.2em] mb-1.5">
                  DESIRED BREATHING DISCIPLINE
                </label>
                <select
                  value={breathingStyle}
                  onChange={(e) => setBreathingStyle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 focus:border-[#C5A48A] rounded-sm text-sm text-[#F5F5F5] focus:outline-none transition-colors"
                >
                  <option value="Sun Breathing / Hinokami Kagura">Sun Breathing (日の呼吸)</option>
                  <option value="Water Breathing">Water Breathing (水の呼吸)</option>
                  <option value="Flame Breathing">Flame Breathing (炎の呼吸)</option>
                  <option value="Thunder Breathing">Thunder Breathing (雷の呼吸)</option>
                  <option value="Beast Breathing">Beast Breathing (獣の呼吸)</option>
                  <option value="Insect Breathing">Insect Breathing (蟲の呼吸)</option>
                  <option value="Wind Breathing">Wind Breathing (風の呼吸)</option>
                  <option value="Stone Breathing">Stone Breathing (岩の呼吸)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-label-bold text-white/50 uppercase tracking-[0.2em] mb-1.5">
                  NICHIRIN BLADE COLOR MANIFESTATION
                </label>
                <select
                  value={customBladeColor}
                  onChange={(e) => setCustomBladeColor(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0F0F0F] border border-white/10 focus:border-[#C5A48A] rounded-sm text-sm text-[#F5F5F5] focus:outline-none transition-colors"
                >
                  <option value="Pitch Black (Sun Affiliation)">Pitch Black (漆黒)</option>
                  <option value="Deep Ocean Blue">Deep Ocean Blue (青)</option>
                  <option value="Crimson Red">Crimson Red (赤)</option>
                  <option value="Amber Yellow">Amber Yellow (黄)</option>
                  <option value="Indigo Grey">Indigo Grey (藍鼠)</option>
                  <option value="Lavender Purple">Lavender Purple (紫)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C5A48A] hover:bg-[#E5D3C5] text-black font-label-bold text-xs tracking-[0.2em] uppercase rounded-sm shadow-[0_4px_20px_rgba(197,164,138,0.3)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 font-bold"
            >
              <span>ISSUE OFFICIAL SLAYER BADGE</span>
              <span className="material-symbols-outlined text-[18px]">
                badge
              </span>
            </button>
          </form>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            {/* The Badge */}
            <div className="relative rounded-sm border border-[#C5A48A]/40 bg-[#0F0F0F] p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-sm overflow-hidden border border-[#C5A48A]">
                    <img
                      src={SLAYER_CORPS_LOGO}
                      alt="Logo"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-sm text-[#F5F5F5]">
                      Demon Slayer Corps
                    </h3>
                    <span className="text-[9px] font-label-bold text-[#C5A48A] uppercase tracking-[0.16em]">
                      ACTIVE DUTY PASS
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-sm bg-[#C5A48A] text-[9px] font-label-bold text-black uppercase font-bold">
                  MIZUNOTO
                </span>
              </div>

              <div className="my-5 space-y-2">
                <span className="text-[10px] font-label-bold text-white/40 uppercase tracking-[0.16em]">
                  ACTIVE COMBATANT
                </span>
                <div className="font-serif-display text-2xl text-[#C5A48A]">
                  {name}
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-2.5 bg-[#141414] rounded-sm border border-white/10">
                    <span className="text-[9px] font-label-bold text-white/40 block uppercase tracking-wider">
                      STYLE
                    </span>
                    <span className="font-serif-display text-xs text-[#9ECFD1]">
                      {breathingStyle.split(' ')[0]}
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#141414] rounded-sm border border-white/10">
                    <span className="text-[9px] font-label-bold text-white/40 block uppercase tracking-wider">
                      BLADE COLOR
                    </span>
                    <span className="font-serif-display text-xs text-[#C5A48A]">
                      {customBladeColor.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-white/30 text-right">
                ID #{Math.floor(100000 + Math.random() * 900000)} • HEADQUARTERS
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 bg-[#181818] text-white/60 hover:text-white border border-white/10 rounded-sm font-label-bold text-xs uppercase tracking-wider"
              >
                EDIT REGISTRATION
              </button>
              <button
                onClick={() => {
                  playSwordSlashSound('slash');
                  onClose();
                }}
                className="flex-1 py-2.5 bg-[#C5A48A] text-black font-bold rounded-sm font-label-bold text-xs uppercase tracking-wider"
              >
                ENTER ARCHIVE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
