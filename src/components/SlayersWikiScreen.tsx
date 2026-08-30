import React, { useState, useMemo } from 'react';
import { Character } from '../types';
import { CHARACTERS, INK_BG_TEXTURE } from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface SlayersWikiScreenProps {
  onSelectCharacter: (char: Character) => void;
}

export const SlayersWikiScreen: React.FC<SlayersWikiScreenProps> = ({
  onSelectCharacter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'primary' | 'hashira' | 'demon'>('all');

  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter((char) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === '' ||
        char.name.toLowerCase().includes(q) ||
        char.japaneseName.includes(searchQuery) ||
        char.breathingStyle.toLowerCase().includes(q) ||
        (char.bloodDemonArt && char.bloodDemonArt.toLowerCase().includes(q)) ||
        char.rank.toLowerCase().includes(q);

      const matchesFilter =
        selectedFilter === 'all'
          ? true
          : selectedFilter === 'demon'
          ? char.isDemon || char.category === 'demon' || char.category === 'upper-moon' || char.category === 'lower-moon'
          : char.category === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);

  const filterTabs: { id: 'all' | 'primary' | 'hashira' | 'demon'; label: string; count: number }[] = [
    { id: 'all', label: 'ALL ARCHIVES', count: CHARACTERS.length },
    { id: 'primary', label: 'PRIMARY SQUAD', count: CHARACTERS.filter((c) => c.category === 'primary').length },
    { id: 'hashira', label: 'THE 9 HASHIRAS (柱)', count: CHARACTERS.filter((c) => c.category === 'hashira').length },
    { id: 'demon', label: 'DEMONS & KIZUKI (鬼)', count: CHARACTERS.filter((c) => c.isDemon || c.category === 'demon' || c.category === 'upper-moon' || c.category === 'lower-moon').length },
  ];

  return (
    <div className="space-y-8 pb-16 animate-fadeIn">
      
      {/* Hero Header with Japanese Ink Texture - Editorial Magazine Cover */}
      <section className="relative rounded-sm overflow-hidden p-6 sm:p-10 border border-white/10 bg-[#141414] shadow-xl">
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none">
          <img
            src={INK_BG_TEXTURE}
            alt="Japanese Ink Wash Texture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#C5A48A]/10 border border-[#C5A48A]/30">
            <span className="material-symbols-outlined text-[16px] text-[#C5A48A]">
              auto_stories
            </span>
            <span className="font-label-bold text-[10px] text-[#C5A48A] tracking-[0.25em] uppercase">
              CORPS COMPENDIUM • CLASSIFIED DOSSIERS
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl text-[#F5F5F5] tracking-tight">
            Personnel & Demons <span className="italic text-[#C5A48A]">Archives</span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed font-light">
            Sanctioned tactical records, breathing techniques, Blood Demon Arts, and sensory benchmark statistics for all active personnel and recorded demon threats.
          </p>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <div className="bg-[#141414] border border-white/10 rounded-sm p-4 sm:p-5 space-y-4 shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* Search Field */}
          <div className="relative w-full sm:w-96">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-[18px]">
              search
            </span>
            <input
              type="text"
              id="input-slayer-search"
              placeholder="Search by name, breathing style, blood art, or rank..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-[#0A0A0A] border border-white/15 rounded-sm text-xs font-sans text-[#F5F5F5] placeholder-white/30 focus:outline-none focus:border-[#C5A48A] transition-colors uppercase tracking-wider"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <span className="material-symbols-outlined text-[16px]">
                  close
                </span>
              </button>
            )}
          </div>

          {/* Results Counter */}
          <div className="text-[11px] font-label-bold text-white/40 tracking-[0.2em] uppercase font-mono">
            SHOWING <span className="text-[#C5A48A]">{filteredCharacters.length}</span> OF {CHARACTERS.length} DOSSIERS
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSwordSlashSound('slash');
                  setSelectedFilter(tab.id);
                }}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-label-bold tracking-[0.16em] uppercase transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#C5A48A] text-black shadow-[0_0_12px_rgba(197,164,138,0.3)] font-bold'
                    : 'bg-[#181818] text-white/50 hover:text-white hover:bg-[#202020] border border-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-sm text-[10px] font-mono ${
                  isActive ? 'bg-black text-[#C5A48A]' : 'bg-[#0F0F0F] text-white/40'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Characters Grid (4 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCharacters.map((char) => {
          const isDemon = char.isDemon || char.category === 'demon' || char.category === 'upper-moon' || char.category === 'lower-moon';

          return (
            <div
              key={char.id}
              onClick={() => {
                playSwordSlashSound(isDemon ? 'fire' : 'slash');
                onSelectCharacter(char);
              }}
              id={`character-card-${char.id}`}
              className={`group relative bg-[#141414] border rounded-sm overflow-hidden transition-all duration-300 cursor-pointer shadow-lg flex flex-col justify-between ${
                isDemon
                  ? 'border-red-900/30 hover:border-red-600/70 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)]'
                  : 'border-white/10 hover:border-[#C5A48A]/70 hover:shadow-[0_10px_30px_rgba(197,164,138,0.15)]'
              }`}
            >
              {/* Top Photo Section with Kanji Rank Diamond */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={char.cardImage}
                  alt={char.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-100 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />

                {/* Japanese Kanji Rank Badge */}
                <div className={`absolute top-3 right-3 px-2 py-1 bg-[#0F0F0F]/90 border rounded-sm flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-105 transition-all ${
                  isDemon ? 'border-red-600/60 text-red-400' : 'border-[#C5A48A]/60 text-[#C5A48A]'
                }`}>
                  <span className="font-serif-display text-xs font-bold">
                    {char.rankKanji}
                  </span>
                </div>

                {/* Category / Rank Pill */}
                <div className={`absolute bottom-3 left-3 px-2.5 py-0.5 rounded-sm text-[9px] font-label-bold uppercase tracking-[0.2em] bg-[#0F0F0F]/90 backdrop-blur-sm border ${
                  isDemon ? 'border-red-700/50 text-red-400' : 'border-white/15 text-[#C5A48A]'
                }`}>
                  {char.rank}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className={`font-serif-display text-lg leading-tight transition-colors ${
                      isDemon ? 'text-[#F5F5F5] group-hover:text-red-400' : 'text-[#F5F5F5] group-hover:text-[#C5A48A]'
                    }`}>
                      {char.name}
                    </h3>
                    <span className="font-serif-display text-xs text-white/30 font-medium">
                      {char.japaneseName}
                    </span>
                  </div>
                  <p className={`text-[11px] font-mono tracking-wide mt-1 truncate ${
                    isDemon ? 'text-red-300/80' : 'text-[#9ECFD1]'
                  }`}>
                    {char.bloodDemonArt || char.breathingStyle}
                  </p>
                </div>

                {/* Mini Combat Stats Preview */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[10px] font-label-bold text-white/40">
                  <div className="bg-[#181818] px-2 py-1 rounded-sm flex justify-between">
                    <span>PWR</span>
                    <span className={`font-mono ${isDemon ? 'text-red-400' : 'text-[#C5A48A]'}`}>{char.combatMetrics.power}%</span>
                  </div>
                  <div className="bg-[#181818] px-2 py-1 rounded-sm flex justify-between">
                    <span>SPD</span>
                    <span className={`font-mono ${isDemon ? 'text-purple-400' : 'text-[#9ECFD1]'}`}>{char.combatMetrics.speed}%</span>
                  </div>
                </div>

                {/* View Dossier Action */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playSwordSlashSound(isDemon ? 'fire' : 'slash');
                    onSelectCharacter(char);
                  }}
                  className={`w-full py-2 rounded-sm font-label-bold text-xs tracking-[0.16em] uppercase transition-all flex items-center justify-center gap-1.5 ${
                    isDemon
                      ? 'bg-[#1C1818] group-hover:bg-red-950 text-white/70 group-hover:text-red-200 border border-white/10 group-hover:border-red-700/60'
                      : 'bg-[#1A1A1A] group-hover:bg-[#C5A48A] text-white/70 group-hover:text-black border border-white/10 group-hover:border-[#C5A48A]'
                  }`}
                >
                  <span>VIEW DOSSIER</span>
                  <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="text-center py-16 bg-[#141414] border border-white/10 rounded-sm space-y-3">
          <span className="material-symbols-outlined text-4xl text-white/30">
            search_off
          </span>
          <h3 className="font-serif-display text-xl text-[#F5F5F5]">
            NO SLAYER OR DEMON RECORDS MATCHED
          </h3>
          <p className="text-sm text-white/40 font-sans font-light">
            Try adjusting your search query or switching category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="px-4 py-2 bg-[#C5A48A] text-black font-label-bold text-xs rounded-sm"
          >
            RESET FILTERS
          </button>
        </div>
      )}
    </div>
  );
};
