import React, { useState, useEffect } from 'react';
import { NavTab, Character, VideoItem } from './types';
import { CHARACTERS, VIDEOS } from './data/demonSlayerData';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { SlayersWikiScreen } from './components/SlayersWikiScreen';
import { DemonsWikiScreen } from './components/DemonsWikiScreen';
import { CharacterDetailScreen } from './components/CharacterDetailScreen';
import { VideosScreen } from './components/VideosScreen';
import { BreathingStylesScreen } from './components/BreathingStylesScreen';
import { FanZoneScreen } from './components/FanZoneScreen';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { JoinCorpsModal } from './components/JoinCorpsModal';
import { playSwordSlashSound } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Scroll to top on tab or character change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedCharacter]);

  const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
  };

  const handleBackFromDetail = () => {
    setSelectedCharacter(null);
  };

  const handleTabChange = (tab: NavTab) => {
    setSelectedCharacter(null);
    setActiveTab(tab);
  };

  const handlePlayVideo = (video: VideoItem) => {
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-[#F5F5F5] font-sans selection:bg-[#C5A48A] selection:text-black">
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main Content Layout with Sidebar */}
      <div className="flex-1 flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 gap-10">
        
        {/* Left Sidebar (Visible on xl screens) */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onSelectCharacter={handleSelectCharacter}
          selectedCharacterId={selectedCharacter?.id}
        />

        {/* Dynamic Center Viewport */}
        <main className="flex-1 min-w-0" id="main-content-viewport">
          {selectedCharacter ? (
            <CharacterDetailScreen
              character={selectedCharacter}
              onBack={handleBackFromDetail}
            />
          ) : activeTab === 'home' ? (
            <HomeScreen
              setActiveTab={handleTabChange}
              onSelectCharacter={handleSelectCharacter}
              onPlayVideo={handlePlayVideo}
            />
          ) : activeTab === 'slayers-wiki' ? (
            <SlayersWikiScreen
              onSelectCharacter={handleSelectCharacter}
            />
          ) : activeTab === 'demons-wiki' ? (
            <DemonsWikiScreen
              onSelectCharacter={handleSelectCharacter}
            />
          ) : activeTab === 'videos' ? (
            <VideosScreen
              onPlayVideo={handlePlayVideo}
            />
          ) : activeTab === 'breathing-styles' ? (
            <BreathingStylesScreen />
          ) : activeTab === 'fan-zone' ? (
            <FanZoneScreen />
          ) : null}
        </main>
      </div>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Interactive Modals */}
      <VideoPlayerModal
        video={activeVideo}
        onClose={handleCloseVideo}
      />

      <JoinCorpsModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
