import React from 'react';
import { NavTab, Character } from '../types';
import { CHARACTERS } from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface SidebarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onSelectCharacter: (char: Character) => void;
  selectedCharacterId?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onSelectCharacter,
  selectedCharacterId
}) => {
  const rengoku = CHARACTERS.find((c) => c.id === 'rengoku') || CHARACTERS[4];
  const muzan = CHARACTERS.find((c) => c.id === 'muzan');

  const totalPersonnel = CHARACTERS.length;
  const hashiraCount = CHARACTERS.filter((c) => c.category === 'hashira').length;
  const demonCount = CHARACTERS.filter((c) => c.isDemon || c.category === 'demon' || c.category === 'upper-moon' || c.category === 'lower-moon').length;

  return (
    <aside className="hidden xl:flex flex-col w-72 flex-shrink-0 bg-[#141414]/90 border-r border-white/10 p-5 sticky top-24 h-[calc(100vh-6.5rem)] overflow-y-auto scrollbar-none rounded-sm">
      
      {/* "THE CORE" Section Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3.5 bg-[#C5A48A] rounded-none" />
          <span className="font-label-bold text-[11px] tracking-[0.25em] text-[#C5A48A] uppercase">
            INDEX DIRECTORY
          </span>
        </div>
        <span className="text-[9px] font-label-bold tracking-widest px-2 py-0.5 rounded-sm bg-[#1A1A1A] text-white/60 border border-white/10">
          VOL. 04
        </span>
      </div>

      {/* Quick Navigation Items */}
      <div className="space-y-1.5 mb-6">
        <button
          onClick={() => {
            playSwordSlashSound('slash');
            setActiveTab('slayers-wiki');
          }}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-label-bold tracking-[0.14em] transition-all ${
            activeTab === 'slayers-wiki'
              ? 'bg-[#C5A48A]/15 text-[#C5A48A] border border-[#C5A48A]/40 font-bold'
              : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px] text-[#C5A48A]">
              group
            </span>
            <span>ALL DOSSIERS</span>
          </div>
          <span className="text-[10px] text-white/40 font-mono">{totalPersonnel}</span>
        </button>

        <button
          onClick={() => {
            playSwordSlashSound('fire');
            setActiveTab('demons-wiki');
          }}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-label-bold tracking-[0.14em] transition-all ${
            activeTab === 'demons-wiki'
              ? 'bg-red-950/40 text-red-400 border border-red-800/50 font-bold'
              : 'text-white/70 hover:bg-white/5 hover:text-red-400 border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px] text-red-400">
              swords
            </span>
            <span>DEMONS & KIZUKI</span>
          </div>
          <span className="text-[10px] text-red-400/70 font-mono">{demonCount}</span>
        </button>

        <button
          onClick={() => {
            playSwordSlashSound('water');
            setActiveTab('breathing-styles');
          }}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-label-bold tracking-[0.14em] transition-all ${
            activeTab === 'breathing-styles'
              ? 'bg-[#C5A48A]/15 text-[#C5A48A] border border-[#C5A48A]/40 font-bold'
              : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px] text-[#9ECFD1]">
              water_drop
            </span>
            <span>BREATHING STYLES</span>
          </div>
          <span className="text-[10px] text-white/40 font-mono">14</span>
        </button>

        <button
          onClick={() => {
            playSwordSlashSound('fire');
            setActiveTab('videos');
          }}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-label-bold tracking-[0.14em] transition-all ${
            activeTab === 'videos'
              ? 'bg-[#C5A48A]/15 text-[#C5A48A] border border-[#C5A48A]/40 font-bold'
              : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px] text-[#C5A48A]">
              play_circle
            </span>
            <span>COMBAT FOOTAGE</span>
          </div>
          <span className="text-[10px] text-white/40 font-mono">08</span>
        </button>

        <button
          onClick={() => {
            playSwordSlashSound('thunder');
            setActiveTab('fan-zone');
          }}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-sm text-xs font-label-bold tracking-[0.14em] transition-all ${
            activeTab === 'fan-zone'
              ? 'bg-[#C5A48A]/15 text-[#C5A48A] border border-[#C5A48A]/40 font-bold'
              : 'text-white/70 hover:bg-white/5 hover:text-white border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[18px] text-[#E5D3C5]">
              assignment_turned_in
            </span>
            <span>CORPS EXAM</span>
          </div>
          <span className="text-[10px] text-white/40 font-mono">TEST</span>
        </button>
      </div>

      {/* Featured Hashiras Quick Directory */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="font-label-bold text-[10px] tracking-[0.22em] text-white/40 uppercase">
            HASHIRA PILLARS (9)
          </span>
          <span className="text-[9px] text-[#C5A48A] uppercase tracking-wider font-mono">柱</span>
        </div>

        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          {CHARACTERS.filter(c => c.category === 'hashira').slice(0, 5).map((char) => {
            const isSelected = selectedCharacterId === char.id;
            return (
              <button
                key={char.id}
                onClick={() => {
                  playSwordSlashSound('slash');
                  onSelectCharacter(char);
                }}
                className={`w-full flex items-center gap-3 p-2 rounded-sm border transition-all text-left group ${
                  isSelected
                    ? 'bg-[#1F1F1F] border-[#C5A48A] shadow-[0_0_12px_rgba(197,164,138,0.2)]'
                    : 'bg-[#181818] border-white/5 hover:border-white/20 hover:bg-[#1E1E1E]'
                }`}
              >
                <div className="relative w-9 h-9 rounded-sm overflow-hidden bg-[#0A0A0A] flex-shrink-0 border border-white/10">
                  <img
                    src={char.cardImage}
                    alt={char.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5" style={{ backgroundColor: char.accentColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif-display text-xs text-[#F5F5F5] truncate group-hover:text-[#C5A48A] transition-colors">
                    {char.name}
                  </div>
                  <div className="text-[10px] text-white/40 truncate tracking-wide">
                    {char.rank}
                  </div>
                </div>
                <span className="material-symbols-outlined text-[14px] text-white/20 group-hover:text-[#C5A48A] group-hover:translate-x-0.5 transition-all">
                  chevron_right
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Demon King Threat Card */}
      {muzan && (
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="relative rounded-sm overflow-hidden border border-red-900/40 bg-gradient-to-b from-[#1E1212] to-[#141414] p-4 group">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-red-600 text-[9px] font-label-bold text-white tracking-[0.2em] uppercase">
              PROGENITOR
            </div>

            <div className="flex items-center gap-3 mb-2.5 mt-1">
              <div className="w-12 h-12 rounded-sm overflow-hidden border border-red-600/60 flex-shrink-0">
                <img
                  src={muzan.cardImage}
                  alt="Muzan Kibutsuji"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-serif-display text-sm text-[#F5F5F5] leading-tight">
                  Muzan Kibutsuji
                </h4>
                <p className="text-[10px] text-red-400 font-label-bold tracking-wider">
                  DEMON KING (鬼王)
                </p>
              </div>
            </div>

            <p className="font-serif-editorial italic text-xs text-white/70 line-clamp-2 mb-3">
              "I am a living natural disaster. I am perfection itself."
            </p>

            <button
              onClick={() => {
                playSwordSlashSound('fire');
                onSelectCharacter(muzan);
              }}
              className="w-full py-2 px-3 bg-red-950 hover:bg-red-900 text-red-200 border border-red-800/50 font-label-bold text-[11px] tracking-[0.18em] rounded-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px]">
                warning
              </span>
              <span>EXAMINE THREAT</span>
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
