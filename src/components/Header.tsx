import React, { useState } from 'react';
import { NavTab } from '../types';
import { SLAYER_CORPS_LOGO } from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenJoinModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenJoinModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sfxMuted, setSfxMuted] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    if (!sfxMuted) {
      if (tab === 'demons-wiki') {
        playSwordSlashSound('fire');
      } else {
        playSwordSlashSound('slash');
      }
    }
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const navItems: { id: NavTab; label: string; icon: string; badge?: string }[] = [
    { id: 'home', label: 'HOME', icon: 'home' },
    { id: 'slayers-wiki', label: 'SLAYERS WIKI', icon: 'shield_person' },
    { id: 'demons-wiki', label: 'DEMONS & KIZUKI', icon: 'swords', badge: 'NEW' },
    { id: 'breathing-styles', label: 'BREATHING STYLES', icon: 'air' },
    { id: 'videos', label: 'VIDEOS', icon: 'play_circle' },
    { id: 'fan-zone', label: 'FAN ZONE & EXAM', icon: 'military_tech' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
          id="header-brand-logo"
        >
          <div className="relative w-11 h-11 rounded-sm overflow-hidden border border-white/20 bg-[#141414] flex items-center justify-center transition-all duration-300 group-hover:border-[#C5A48A] group-hover:scale-105">
            <img 
              src={SLAYER_CORPS_LOGO} 
              alt="Demon Slayer Corps Seal"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A48A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-serif-display italic text-xl sm:text-2xl text-[#F5F5F5] tracking-tight group-hover:text-[#C5A48A] transition-colors">
                Slayer's Chronicle
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-label-bold tracking-[0.2em] bg-[#C5A48A]/10 text-[#C5A48A] border border-[#C5A48A]/30 rounded-sm">
                VOL. 04
              </span>
            </div>
            <p className="text-[10px] tracking-[0.28em] text-white/40 font-medium uppercase font-sans">
              ARCHIVE COMPENDIUM • TAISHO ERA
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const isDemonTab = item.id === 'demons-wiki';

            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-sm font-label-bold text-xs tracking-[0.14em] transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? isDemonTab
                      ? 'text-red-400 bg-red-950/40 border-b border-red-500'
                      : 'text-[#C5A48A] bg-white/5 border-b border-[#C5A48A]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`material-symbols-outlined text-[16px] ${
                  isDemonTab ? 'text-red-400 opacity-90' : 'opacity-70'
                }`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1 py-0.2 text-[8px] font-mono tracking-widest bg-red-600/80 text-white rounded-xs">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Controls */}
        <div className="flex items-center gap-3">
          {/* SFX sound toggle */}
          <button
            onClick={() => {
              setSfxMuted(!sfxMuted);
            }}
            id="header-sfx-toggle"
            title={sfxMuted ? 'Unmute Katana SFX' : 'Mute Katana SFX'}
            className="w-9 h-9 rounded-sm border border-white/10 bg-[#141414] hover:bg-[#1E1E1E] text-white/60 hover:text-[#C5A48A] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[17px]">
              {sfxMuted ? 'volume_off' : 'volume_up'}
            </span>
          </button>

          {/* Join Corps CTA Button */}
          <button
            onClick={() => {
              playSwordSlashSound('slash');
              onOpenJoinModal();
            }}
            id="header-btn-join-corps"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#C5A48A] hover:bg-[#E5D3C5] text-black font-label-bold text-xs tracking-[0.18em] uppercase rounded-sm shadow-[0_2px_10px_rgba(197,164,138,0.2)] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[15px]">
              stylus
            </span>
            <span>JOIN CORPS</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="header-mobile-menu-btn"
            className="lg:hidden w-9 h-9 rounded-sm border border-white/10 bg-[#141414] flex items-center justify-center text-white/70 hover:text-white"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-white/10 px-4 py-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-sm font-label-bold text-xs tracking-[0.16em] uppercase ${
                  activeTab === item.id
                    ? 'bg-[#C5A48A]/15 text-[#C5A48A] border-l-2 border-[#C5A48A]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] font-mono bg-red-600 text-white rounded-xs">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                onOpenJoinModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#C5A48A] text-black font-label-bold text-xs tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">
                stylus
              </span>
              <span>APPLY FOR FINAL SELECTION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
