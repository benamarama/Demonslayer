import React, { useState, useMemo } from 'react';
import { Character } from '../types';
import { CHARACTERS, INK_BG_TEXTURE } from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface DemonsWikiScreenProps {
  onSelectCharacter: (char: Character) => void;
}

type DemonFilter = 'all' | 'king' | 'upper' | 'lower';

export const DemonsWikiScreen: React.FC<DemonsWikiScreenProps> = ({
  onSelectCharacter
}) => {
  const [activeFilter, setActiveFilter] = useState<DemonFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const demonCharacters = useMemo(() => {
    return CHARACTERS.filter((c) => c.isDemon || c.category === 'demon' || c.category === 'upper-moon' || c.category === 'lower-moon');
  }, []);

  const filteredDemons = useMemo(() => {
    return demonCharacters.filter((char) => {
      // Category filter
      if (activeFilter === 'king') {
        if (char.id !== 'muzan') return false;
      } else if (activeFilter === 'upper') {
        if (char.category !== 'upper-moon') return false;
      } else if (activeFilter === 'lower') {
        if (char.category !== 'lower-moon' && char.id !== 'kyogai') return false;
      }

      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = char.name.toLowerCase().includes(q) || char.japaneseName.includes(q);
        const matchesArt = (char.bloodDemonArt || char.breathingStyle).toLowerCase().includes(q);
        const matchesRank = char.rank.toLowerCase().includes(q) || char.rankKanji.includes(q);
        return matchesName || matchesArt || matchesRank;
      }

      return true;
    });
  }, [demonCharacters, activeFilter, searchQuery]);

  const upperMoonsCount = demonCharacters.filter(c => c.category === 'upper-moon').length;
  const lowerMoonsCount = demonCharacters.filter(c => c.category === 'lower-moon' || c.id === 'kyogai').length;

  return (
    <div className="space-y-10 pb-16 animate-fadeIn">
      
      {/* Editorial Header Banner - Twelve Kizuki Chronicle */}
      <section className="relative rounded-sm overflow-hidden bg-[#141414] border border-red-900/30 shadow-2xl p-6 sm:p-10 lg:p-12">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen pointer-events-none">
          <img
            src={INK_BG_TEXTURE}
            alt="Ink splash texture"
            className="w-full h-full object-cover filter invert"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Subtle crimson gradient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-red-950/60 border border-red-800/40 text-red-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-label-bold text-[10px] tracking-[0.25em] uppercase">
              TWELVE KIZUKI & DEMON PROGENITOR ARCHIVE • 十二鬼月
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight leading-none">
            The Twelve <span className="italic text-red-400">Kizuki</span> & Muzan
          </h1>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed font-light">
            Directly infused with the concentrated blood of progenitor <strong className="text-white font-medium">Muzan Kibutsuji</strong>, the Twelve Kizuki represent the absolute zenith of demonic evolution. Unchanged for over a century, the Upper Moons possess lethal Blood Demon Arts (血鬼術) and cellular regeneration capable of repelling entire squads of Hashiras.
          </p>

          {/* Kizuki Quick Metric Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="px-3.5 py-1.5 rounded-sm bg-[#1A1A1A] border border-red-900/40 flex items-center gap-2">
              <span className="text-xs font-mono text-red-400 font-bold">鬼王</span>
              <span className="text-[11px] font-label-bold text-white/80 tracking-wider">1 PROGENITOR</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-sm bg-[#1A1A1A] border border-purple-900/40 flex items-center gap-2">
              <span className="text-xs font-mono text-purple-400 font-bold">上弦</span>
              <span className="text-[11px] font-label-bold text-white/80 tracking-wider">{upperMoonsCount} UPPER MOONS</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-sm bg-[#1A1A1A] border border-white/10 flex items-center gap-2">
              <span className="text-xs font-mono text-white/50 font-bold">下弦</span>
              <span className="text-[11px] font-label-bold text-white/80 tracking-wider">{lowerMoonsCount} LOWER MOONS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="bg-[#141414] border border-white/10 rounded-sm p-4 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'ALL DEMONS', icon: 'military_tech', count: demonCharacters.length },
              { id: 'king', label: 'DEMON KING', icon: 'crown', count: 1 },
              { id: 'upper', label: 'UPPER MOONS (上弦)', icon: 'swords', count: upperMoonsCount },
              { id: 'lower', label: 'LOWER MOONS (下弦)', icon: 'shield', count: lowerMoonsCount }
            ].map((f) => {
              const isSelected = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => {
                    playSwordSlashSound('slash');
                    setActiveFilter(f.id as DemonFilter);
                  }}
                  id={`btn-filter-demon-${f.id}`}
                  className={`px-4 py-2 rounded-sm text-xs font-label-bold tracking-[0.16em] uppercase transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-red-950 text-red-200 border border-red-700/60 shadow-[0_0_12px_rgba(220,38,38,0.2)]'
                      : 'bg-[#181818] text-white/60 hover:text-white hover:bg-[#202020] border border-white/5'
                  }`}
                >
                  <span>{f.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-sm ${
                    isSelected ? 'bg-red-800/40 text-red-300' : 'bg-white/5 text-white/40'
                  }`}>
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="SEARCH DEMON, RANK OR BLOOD ART..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 focus:border-red-500/60 text-xs font-sans text-white pl-9 pr-4 py-2.5 rounded-sm outline-none placeholder:text-white/30 tracking-wider uppercase transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Grid of Demons Dossiers */}
      <section>
        {filteredDemons.length === 0 ? (
          <div className="bg-[#141414] border border-white/10 rounded-sm p-12 text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-white/20">
              visibility_off
            </span>
            <h3 className="font-serif-display text-xl text-white/80">
              No Demon Dossiers Found
            </h3>
            <p className="text-xs text-white/40 tracking-wider">
              Try refining your search keyword or selected category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDemons.map((demon) => {
              const isUpperMoon = demon.category === 'upper-moon';
              const isKing = demon.id === 'muzan';

              return (
                <div
                  key={demon.id}
                  onClick={() => {
                    playSwordSlashSound('fire');
                    onSelectCharacter(demon);
                  }}
                  id={`card-demon-${demon.id}`}
                  className="bg-[#141414] border border-white/10 hover:border-red-700/60 rounded-sm overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)] hover:-translate-y-1 relative"
                >
                  {/* Top Image Artwork Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A] border-b border-white/10">
                    <img
                      src={demon.cardImage}
                      alt={demon.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                    {/* Threat Level Badge Top Left */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-sm text-[9px] font-label-bold tracking-[0.2em] uppercase font-mono shadow-md ${
                        demon.threatLevel === 'Calamity'
                          ? 'bg-red-600 text-white font-bold'
                          : demon.threatLevel === 'Extreme'
                          ? 'bg-purple-600 text-white'
                          : demon.threatLevel === 'High'
                          ? 'bg-amber-600 text-black font-bold'
                          : 'bg-zinc-800 text-zinc-300 border border-white/10'
                      }`}>
                        THREAT: {demon.threatLevel || 'HIGH'}
                      </span>
                    </div>

                    {/* Rank Kanji Eye Seal Badge Top Right */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-sm bg-black/80 border border-red-600/50 backdrop-blur-md shadow-lg flex items-center justify-center">
                      <span className="font-serif-display text-xs text-red-400 font-bold tracking-widest">
                        {demon.rankKanji}
                      </span>
                    </div>

                    {/* Bottom overlay Name on Image */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-label-bold tracking-[0.2em] text-red-400 uppercase">
                          {demon.rank}
                        </span>
                        <h3 className="font-serif-display text-xl text-[#F5F5F5] group-hover:text-red-300 transition-colors leading-tight">
                          {demon.name}
                        </h3>
                      </div>
                      <span className="font-serif-display text-sm text-white/30 tracking-widest font-normal">
                        {demon.japaneseName}
                      </span>
                    </div>
                  </div>

                  {/* Card Body with Blood Demon Art & Stats */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      {/* Blood Demon Art */}
                      <div className="p-2.5 rounded-sm bg-[#181818] border border-red-950/40">
                        <div className="text-[9px] font-label-bold text-red-400 uppercase tracking-[0.2em] mb-0.5">
                          BLOOD DEMON ART (血鬼術)
                        </div>
                        <div className="text-xs text-white/90 font-medium truncate">
                          {demon.bloodDemonArt || demon.breathingStyle}
                        </div>
                      </div>

                      {/* Quote preview */}
                      <p className="font-serif-editorial italic text-xs text-white/60 line-clamp-2 leading-relaxed">
                        "{demon.quote}"
                      </p>
                    </div>

                    {/* Combat Metrics Mini Progress */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-label-bold text-white/50 font-mono">
                        <div className="flex justify-between bg-[#181818] px-2 py-1 rounded-sm border border-white/5">
                          <span>POWER</span>
                          <span className="text-red-400">{demon.combatMetrics.power}%</span>
                        </div>
                        <div className="flex justify-between bg-[#181818] px-2 py-1 rounded-sm border border-white/5">
                          <span>SPEED</span>
                          <span className="text-purple-400">{demon.combatMetrics.speed}%</span>
                        </div>
                      </div>

                      {/* Action CTA Button */}
                      <button className="w-full py-2 bg-[#1C1C1C] group-hover:bg-red-950 text-white/80 group-hover:text-red-200 border border-white/10 group-hover:border-red-700/50 rounded-sm font-label-bold text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-1.5 mt-1">
                        <span>EXAMINE DEMON DOSSIER</span>
                        <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Muzan's Curse & Kizuki Hierarchy Reference Guide */}
      <section className="bg-[#141414] border border-red-900/20 rounded-sm p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
          <span className="material-symbols-outlined text-red-400 text-xl">
            menu_book
          </span>
          <div>
            <h3 className="font-serif-display text-xl text-[#F5F5F5]">
              Corps Intelligence: The Kizuki Hierarchy
            </h3>
            <p className="text-[10px] text-white/40 font-label-bold tracking-[0.2em] uppercase">
              STRATEGIC ANALYSIS FOR CERTIFIED DEMON SLAYERS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/70 font-sans leading-relaxed">
          <div className="p-4 rounded-sm bg-[#181818] border border-white/5 space-y-2">
            <h4 className="font-label-bold text-red-400 text-[11px] uppercase tracking-wider">
              1. The Demon King's Cellular Curse
            </h4>
            <p className="font-light">
              Muzan Kibutsuji maintains telepathic and biological dominion over all demons through his cellular curse. Uttering his name aloud triggers cellular self-destruction that crushes the demon from within.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[#181818] border border-white/5 space-y-2">
            <h4 className="font-label-bold text-purple-400 text-[11px] uppercase tracking-wider">
              2. The Upper Moon Stagnation
            </h4>
            <p className="font-light">
              The Upper Ranks (Kokushibo through Gyutaro) have remained unchanged for over 113 years, having slain and consumed hundreds of Hashiras across generations without suffering a single defeat.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[#181818] border border-white/5 space-y-2">
            <h4 className="font-label-bold text-[#C5A48A] text-[11px] uppercase tracking-wider">
              3. Decapitation Exceptions
            </h4>
            <p className="font-light">
              Several Upper Moons possess physiology that circumvents standard decapitation: Akaza and Kokushibo can regrow heads through combat willpower, Hantengu splits into emotion avatars, and Gyutaro/Daki require simultaneous neck bisection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
