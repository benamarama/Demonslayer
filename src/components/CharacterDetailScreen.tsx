import React, { useState } from 'react';
import { Character, BreathingForm } from '../types';
import {
  WATER_WAVES_TEXTURE,
  INK_SPLASH_MASK
} from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface CharacterDetailScreenProps {
  character: Character;
  onBack: () => void;
}

export const CharacterDetailScreen: React.FC<CharacterDetailScreenProps> = ({
  character,
  onBack
}) => {
  const [selectedFormIndex, setSelectedFormIndex] = useState(0);
  const activeForm: BreathingForm | undefined = character.breathingForms[selectedFormIndex] || character.breathingForms[0];

  const isDemon = character.isDemon || character.category === 'demon' || character.category === 'upper-moon' || character.category === 'lower-moon';

  const handleFormSelect = (index: number) => {
    if (isDemon) {
      playSwordSlashSound('fire');
    } else {
      const isWater = character.breathingStyle.toLowerCase().includes('water');
      const isThunder = character.breathingStyle.toLowerCase().includes('thunder');
      const isFlame = character.breathingStyle.toLowerCase().includes('flame') || character.breathingStyle.toLowerCase().includes('sun');

      if (isThunder) playSwordSlashSound('thunder');
      else if (isFlame) playSwordSlashSound('fire');
      else if (isWater) playSwordSlashSound('water');
      else playSwordSlashSound('slash');
    }

    setSelectedFormIndex(index);
  };

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      
      {/* Back to Database Nav */}
      <div>
        <button
          onClick={() => {
            playSwordSlashSound('slash');
            onBack();
          }}
          id="btn-back-to-database"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#141414] hover:bg-[#1E1E1E] text-white/60 hover:text-[#C5A48A] border border-white/10 hover:border-[#C5A48A]/40 text-xs font-label-bold tracking-[0.16em] uppercase transition-colors"
        >
          <span className="material-symbols-outlined text-[15px]">
            arrow_back
          </span>
          <span>RETURN TO ARCHIVE COMPENDIUM</span>
        </button>
      </div>

      {/* Hero Header Section - Editorial Cover Feature */}
      <section className={`relative rounded-sm overflow-hidden bg-[#141414] border shadow-2xl p-6 sm:p-10 lg:p-12 ${
        isDemon ? 'border-red-900/30' : 'border-white/10'
      }`}>
        {/* Background Texture overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-screen pointer-events-none">
          <img
            src={WATER_WAVES_TEXTURE}
            alt="Waves"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {isDemon && (
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Character Meta & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`px-3 py-1 rounded-sm text-[10px] font-label-bold tracking-[0.2em] uppercase font-bold ${
                isDemon ? 'bg-red-600 text-white' : 'bg-[#C5A48A] text-black'
              }`}>
                {character.rank}
              </span>
              <span className={`px-3 py-1 rounded-sm border text-[10px] font-label-bold tracking-[0.2em] uppercase font-mono ${
                isDemon ? 'bg-[#1A1A1A] text-red-300 border-red-900/40' : 'bg-[#1A1A1A] text-[#9ECFD1] border-white/10'
              }`}>
                {isDemon ? (character.bloodDemonArt || character.breathingStyle) : character.breathingStyle}
              </span>
              {character.threatLevel && (
                <span className="px-3 py-1 rounded-sm bg-black/60 text-red-400 border border-red-800/40 text-[10px] font-label-bold tracking-[0.2em] uppercase font-mono">
                  THREAT: {character.threatLevel}
                </span>
              )}
              <span className="px-3 py-1 rounded-sm bg-[#1A1A1A] text-white/50 border border-white/10 text-[10px] font-label-bold tracking-[0.2em] uppercase font-mono">
                {character.masteredFormsCount} {isDemon ? 'BLOOD ARTS RECORDED' : 'FORMS MASTERED'}
              </span>
            </div>

            <div>
              <h1 className="font-serif-display text-4xl sm:text-6xl text-[#F5F5F5] tracking-tight leading-none">
                {character.name}
              </h1>
              <p className={`font-serif-display text-2xl tracking-widest mt-2 font-normal ${
                isDemon ? 'text-red-400' : 'text-[#C5A48A]'
              }`}>
                {character.japaneseName}
              </p>
            </div>

            {/* Quote Box */}
            <div className={`relative pl-5 py-3 rounded-r-sm p-4 border-y border-r ${
              isDemon 
                ? 'border-l-2 border-red-600 bg-[#181212] border-red-900/20' 
                : 'border-l-2 border-[#C5A48A] bg-[#1A1A1A] border-white/5'
            }`}>
              <p className="font-serif-editorial italic text-base sm:text-lg text-[#E5D3C5] leading-relaxed">
                "{character.quote}"
              </p>
              <div className="mt-2 text-right">
                <span className={`text-[10px] font-label-bold uppercase tracking-[0.2em] ${
                  isDemon ? 'text-red-400' : 'text-[#C5A48A]'
                }`}>
                  — {character.name}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Character Artwork in Framed Container */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className={`relative w-full max-w-sm aspect-[4/5] rounded-sm overflow-hidden border shadow-[0_12px_40px_rgba(0,0,0,0.7)] bg-[#0A0A0A] group ${
              isDemon ? 'border-red-900/40' : 'border-white/20'
            }`}>
              <img
                src={character.heroImage}
                alt={character.name}
                className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60" />
              
              {/* Kanji Seal Badge */}
              <div className={`absolute bottom-4 right-4 px-3 py-1.5 rounded-sm border flex items-center justify-center shadow-lg backdrop-blur-md ${
                isDemon ? 'bg-red-950/90 border-red-600 text-red-200' : 'bg-[#C5A48A] border-black text-black'
              }`}>
                <span className="font-serif-display text-base font-bold">
                  {character.rankKanji}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Profile (Biography & Traits) */}
      <section className="bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className={`w-1 h-4 ${isDemon ? 'bg-red-500' : 'bg-[#C5A48A]'}`} />
          <div>
            <h2 className="font-serif-display text-2xl text-[#F5F5F5] tracking-tight">
              {isDemon ? 'Demonic Dossier & Origin' : 'Tactical Profile'}
            </h2>
            <p className="text-[10px] text-white/40 font-label-bold tracking-[0.2em] uppercase">
              {isDemon ? 'PHYSIOLOGICAL EVOLUTION & SENSORY TRAITS' : 'CHRONICLE BIOGRAPHY & SENSORY TRAITS'}
            </p>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/75 font-sans leading-relaxed font-light">
          {character.bioColumns.map((col, idx) => (
            <div key={idx} className="p-4 rounded-sm bg-[#181818] border border-white/5">
              <p>{col}</p>
            </div>
          ))}
        </div>

        {/* Sensory Traits Badges */}
        <div className="pt-2">
          <div className="text-[10px] font-label-bold text-white/40 uppercase tracking-[0.2em] mb-2.5">
            {isDemon ? 'DEMONIC PHYSIOLOGY & SPECIALIZED ATTRIBUTES' : 'DISTINCTIVE COMBAT SENSES & ATTRIBUTES'}
          </div>
          <div className="flex flex-wrap gap-2">
            {character.traits.map((trait, idx) => (
              <div
                key={idx}
                className={`px-3 py-1.5 rounded-sm border text-xs font-label-bold tracking-wider flex items-center gap-1.5 ${
                  isDemon 
                    ? 'bg-[#1C1616] border-red-900/50 text-red-300' 
                    : 'bg-[#181818] border-[#C5A48A]/30 text-[#C5A48A]'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {isDemon ? 'emergency' : 'check_circle'}
                </span>
                <span>{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combat Assessment (Progress Bars & Tactical Notes) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: 4 Metric Bars (8 Cols) */}
        <div className="lg:col-span-8 bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="font-serif-display text-2xl text-[#F5F5F5] tracking-tight">
                {isDemon ? 'Demonic Threat Benchmark' : 'Combat Assessment'}
              </h2>
              <p className="text-[10px] text-white/40 font-label-bold tracking-[0.2em] uppercase">
                {isDemon ? 'CORPS HAZARD EVALUATION' : 'CERTIFIED CORPS BENCHMARKS'}
              </p>
            </div>
            <span className={`text-[10px] font-label-bold tracking-widest px-2.5 py-1 rounded-sm ${
              isDemon ? 'bg-red-950 text-red-300 border border-red-800/40' : 'bg-[#1A1A1A] text-[#C5A48A] border border-[#C5A48A]/30'
            }`}>
              {isDemon ? 'UPPER TIER THREAT' : 'TIER 4 ACTIVE'}
            </span>
          </div>

          <div className="space-y-4">
            {/* Power */}
            <div>
              <div className="flex justify-between text-xs font-label-bold text-white/60 mb-1.5">
                <span>{isDemon ? 'BIOMECHANICAL POWER & DESTRUCTION' : 'PHYSICAL POWER & IMPACT'}</span>
                <span className={`font-mono ${isDemon ? 'text-red-400' : 'text-[#C5A48A]'}`}>{character.combatMetrics.power}%</span>
              </div>
              <div className="w-full h-1 bg-[#262626] rounded-none overflow-hidden">
                <div
                  className={`h-full transition-all duration-700 ${isDemon ? 'bg-red-500' : 'bg-[#C5A48A]'}`}
                  style={{ width: `${character.combatMetrics.power}%` }}
                />
              </div>
            </div>

            {/* Speed */}
            <div>
              <div className="flex justify-between text-xs font-label-bold text-white/60 mb-1.5">
                <span>{isDemon ? 'AGILITY & CELLULAR VELOCITY' : 'AGILITY & COMBAT SPEED'}</span>
                <span className="text-[#E5D3C5] font-mono">{character.combatMetrics.speed}%</span>
              </div>
              <div className="w-full h-1 bg-[#262626] rounded-none overflow-hidden">
                <div
                  className="h-full bg-[#E5D3C5] transition-all duration-700"
                  style={{ width: `${character.combatMetrics.speed}%` }}
                />
              </div>
            </div>

            {/* Technique */}
            <div>
              <div className="flex justify-between text-xs font-label-bold text-white/60 mb-1.5">
                <span>{isDemon ? 'BLOOD DEMON ART MASTERY' : 'SWORD TECHNIQUE & MASTERY'}</span>
                <span className={`font-mono ${isDemon ? 'text-purple-400' : 'text-[#9ECFD1]'}`}>{character.combatMetrics.technique}%</span>
              </div>
              <div className="w-full h-1 bg-[#262626] rounded-none overflow-hidden">
                <div
                  className={`h-full transition-all duration-700 ${isDemon ? 'bg-purple-500' : 'bg-[#9ECFD1]'}`}
                  style={{ width: `${character.combatMetrics.technique}%` }}
                />
              </div>
            </div>

            {/* Stamina */}
            <div>
              <div className="flex justify-between text-xs font-label-bold text-white/60 mb-1.5">
                <span>{isDemon ? 'HYPER-REGENERATION RECOVERY RATE' : 'TOTAL CONCENTRATION RESPIRATORY STAMINA'}</span>
                <span className={`font-mono ${isDemon ? 'text-rose-400' : 'text-[#A7D7B5]'}`}>{character.combatMetrics.stamina}%</span>
              </div>
              <div className="w-full h-1 bg-[#262626] rounded-none overflow-hidden">
                <div
                  className={`h-full transition-all duration-700 ${isDemon ? 'bg-rose-500' : 'bg-[#A7D7B5]'}`}
                  style={{ width: `${character.combatMetrics.stamina}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tactical Note Card (4 Cols) */}
        <div className="lg:col-span-4 bg-[#141414] border border-white/10 rounded-sm p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`material-symbols-outlined text-[18px] ${isDemon ? 'text-red-400' : 'text-[#C5A48A]'}`}>
                warning
              </span>
              <span className={`font-label-bold text-[10px] uppercase tracking-[0.2em] ${isDemon ? 'text-red-400' : 'text-[#C5A48A]'}`}>
                {isDemon ? 'KILL / SURVIVAL PROTOCOL' : 'TACTICAL CAUTION NOTE'}
              </span>
            </div>
            <p className="text-xs text-white/75 font-sans leading-relaxed font-light">
              {character.combatMetrics.note || (isDemon 
                ? 'Nichirin decapitation with crimson blade temperature recommended to halt instant cellular recovery.' 
                : 'Full respiratory recovery required following sustained Total Concentration Breathing Constant cycles.')}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4">
            <div className="flex items-center justify-between text-[10px] font-label-bold tracking-widest text-white/40">
              <span>ASSESSMENT VERIFIED</span>
              <span className={`font-mono ${isDemon ? 'text-red-400' : 'text-[#9ECFD1]'}`}>
                {isDemon ? 'CORPS THREAT ADVISORY' : 'CORPS CERTIFIED'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mastered Breathing Forms / Blood Demon Arts Section */}
      {character.breathingForms && character.breathingForms.length > 0 && (
        <section className="bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <div className={`w-1 h-4 ${isDemon ? 'bg-red-500' : 'bg-[#C5A48A]'}`} />
                <h2 className="font-serif-display text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight">
                  {isDemon ? 'Blood Demon Arts & Techniques' : 'Mastered Forms & Stances'}
                </h2>
              </div>
              <p className="text-[10px] text-white/40 font-label-bold tracking-[0.2em] uppercase">
                {isDemon ? 'AUTHENTIC BLOOD ART MANIFESTATIONS • 血鬼術' : 'AUTHENTIC DEMON SLAYER CORPS SWORD CATALOG'}
              </p>
            </div>

            <span className={`text-[10px] font-label-bold tracking-[0.16em] ${isDemon ? 'text-red-400' : 'text-[#C5A48A]'}`}>
              {isDemon ? 'SELECT BLOOD ART TO INSPECT' : 'SELECT A FORM TO EXAMINE STANCE'}
            </span>
          </div>

          {/* Form Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {character.breathingForms.map((form, idx) => {
              const isSelected = selectedFormIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleFormSelect(idx)}
                  id={`btn-form-${idx}`}
                  className={`px-4 py-2 rounded-sm text-xs font-label-bold tracking-[0.16em] uppercase transition-all flex items-center gap-2 ${
                    isSelected
                      ? isDemon
                        ? 'bg-red-950 text-red-200 border border-red-700/60 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                        : 'bg-[#C5A48A] text-black shadow-[0_0_12px_rgba(197,164,138,0.3)] font-bold'
                      : 'bg-[#181818] text-white/50 hover:text-white hover:bg-[#222222] border border-white/10'
                  }`}
                >
                  <span>{form.num}</span>
                  <span className="text-[10px] opacity-60">|</span>
                  <span>{form.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stance / Technique Highlight Card */}
          {activeForm && (
            <div className="p-6 sm:p-8 rounded-sm bg-[#181818] border border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <span className={`text-[10px] font-label-bold uppercase tracking-[0.2em] ${
                    isDemon ? 'text-red-400' : 'text-[#C5A48A]'
                  }`}>
                    {activeForm.num}
                  </span>
                  <h3 className="font-serif-display text-2xl text-[#F5F5F5] tracking-tight">
                    {activeForm.title}
                  </h3>
                </div>
                {activeForm.japaneseTitle && (
                  <span className="font-serif-display text-xl text-white/30 tracking-widest">
                    {activeForm.japaneseTitle}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed font-light">
                {activeForm.desc}
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
