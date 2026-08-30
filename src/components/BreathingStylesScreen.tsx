import React, { useState } from 'react';
import { BREATHING_STYLES } from '../data/demonSlayerData';
import { BreathingStyleDetail } from '../types';
import { playSwordSlashSound } from '../utils/audio';

export const BreathingStylesScreen: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>('sun');

  const activeStyle: BreathingStyleDetail =
    BREATHING_STYLES.find((s) => s.id === selectedStyleId) || BREATHING_STYLES[0];

  const handleSelectStyle = (id: string) => {
    if (id === 'thunder') playSwordSlashSound('thunder');
    else if (id === 'flame' || id === 'sun') playSwordSlashSound('fire');
    else if (id === 'water') playSwordSlashSound('water');
    else playSwordSlashSound('slash');

    setSelectedStyleId(id);
  };

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      
      {/* Header - Editorial Style */}
      <section className="bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#C5A48A]/10 border border-[#C5A48A]/30">
            <span className="material-symbols-outlined text-[16px] text-[#C5A48A]">
              cyclone
            </span>
            <span className="font-label-bold text-[10px] text-[#C5A48A] tracking-[0.25em] uppercase">
              RESPIRATORY DISCIPLINES • GENEALOGY ARCHIVE
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl text-[#F5F5F5] tracking-tight">
            Breathing <span className="italic text-[#C5A48A]">Genealogy</span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed font-light">
            All breathing techniques derive from the primordial Sun Breathing created during the Sengoku Era. 
            Total Concentration Breathing oxygenates the bloodstream, multiplying human physical prowess to rival demonic strength.
          </p>
        </div>
      </section>

      {/* Style Tree Navigator */}
      <div className="bg-[#141414] border border-white/10 rounded-sm p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="font-label-bold text-[10px] text-white/40 uppercase tracking-[0.2em]">
            PRIMARY BREATHING BRANCHES
          </span>
          <span className="text-[11px] text-[#C5A48A] font-label-bold tracking-wider">
            SUN BREATHING (PRIMORDIAL ORIGIN)
          </span>
        </div>

        {/* Tree Grid Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {BREATHING_STYLES.map((style) => {
            const isSelected = selectedStyleId === style.id;
            return (
              <button
                key={style.id}
                onClick={() => handleSelectStyle(style.id)}
                id={`btn-style-tab-${style.id}`}
                className={`p-4 rounded-sm border text-left transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#1C1C1C] border-[#C5A48A] shadow-[0_0_15px_rgba(197,164,138,0.25)]'
                    : 'bg-[#181818] border-white/10 hover:border-white/25 hover:bg-[#1E1E1E]'
                }`}
              >
                <div>
                  <div
                    className="w-2.5 h-2.5 rounded-full mb-2.5"
                    style={{ backgroundColor: style.color }}
                  />
                  <h3 className="font-serif-display text-sm text-[#F5F5F5] group-hover:text-[#C5A48A] transition-colors leading-tight">
                    {style.name.split(' ')[0]}
                  </h3>
                  <p className="font-serif-display text-xs text-white/30 mt-0.5 font-light">
                    {style.japanese.split(' ')[0]}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-white/40 mt-3 uppercase">
                  {style.keyForms.length} FORMS
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Breathing Style Deep Dive */}
      <section className="bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl space-y-8">
        
        {/* Style Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeStyle.color }}
              />
              <span className="text-[10px] font-label-bold text-white/40 uppercase tracking-[0.2em]">
                {activeStyle.parentStyle ? `DERIVED FROM ${activeStyle.parentStyle}` : 'PRIMORDIAL PARENT STYLE'}
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F5F5F5] tracking-tight">
              {activeStyle.name}
            </h2>
            <p className="font-serif-display text-xl text-[#C5A48A] tracking-wider mt-1 font-normal">
              {activeStyle.japanese}
            </p>
          </div>

          {/* Notable Practitioners */}
          <div className="bg-[#181818] border border-white/10 rounded-sm p-4 md:min-w-[280px]">
            <span className="text-[10px] font-label-bold text-white/40 uppercase tracking-[0.2em] block mb-2">
              NOTABLE PRACTITIONERS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeStyle.notableUsers.map((user, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-sm bg-[#0F0F0F] text-xs font-sans text-white/80 border border-white/10"
                >
                  {user}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Style Philosophy & Lore */}
        <div className="p-5 rounded-sm bg-[#181818] border border-white/5">
          <h3 className="font-label-bold text-[10px] text-[#C5A48A] uppercase tracking-[0.2em] mb-2">
            COMBAT DOCTRINE & ANATOMY
          </h3>
          <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed font-light">
            {activeStyle.description}
          </p>
        </div>

        {/* Key Kata & Techniques Showcase */}
        <div className="space-y-4">
          <h3 className="font-serif-display text-2xl text-[#F5F5F5] tracking-tight">
            Signature Forms & Stances
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeStyle.keyForms.map((kata, idx) => (
              <div
                key={idx}
                className="p-4 rounded-sm bg-[#181818] border border-white/10 hover:border-[#C5A48A]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-sm bg-[#C5A48A] text-[9px] font-label-bold text-black uppercase tracking-[0.2em] font-bold">
                      {kata.formNum}
                    </span>
                    <button
                      onClick={() => {
                        if (activeStyle.id === 'thunder') playSwordSlashSound('thunder');
                        else if (activeStyle.id === 'flame' || activeStyle.id === 'sun') playSwordSlashSound('fire');
                        else if (activeStyle.id === 'water') playSwordSlashSound('water');
                        else playSwordSlashSound('slash');
                      }}
                      className="p-1 text-white/40 hover:text-[#C5A48A] transition-colors"
                      title="Play Slash SFX"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        volume_up
                      </span>
                    </button>
                  </div>
                  <h4 className="font-serif-display text-base text-[#F5F5F5] group-hover:text-[#C5A48A] transition-colors">
                    {kata.name}
                  </h4>
                  <p className="text-xs text-white/60 font-sans leading-relaxed mt-2 font-light">
                    {kata.effect}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-label-bold text-white/40">
                  <span>EXECUTION SPEED: SUB-SECOND</span>
                  <span className="text-[#9ECFD1] font-mono">VERIFIED KATA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
