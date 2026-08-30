export interface BreathingForm {
  num: string;
  title: string;
  desc: string;
  stanceImage?: string;
  japaneseTitle?: string;
}

export interface Character {
  id: string;
  name: string;
  japaneseName: string;
  rank: string;
  rankKanji: string;
  breathingStyle: string; // Or Blood Demon Art name for demons
  category: 'primary' | 'hashira' | 'corps' | 'demon' | 'upper-moon' | 'lower-moon';
  quote: string;
  bioColumns: string[];
  traits: string[];
  combatMetrics: {
    power: number;
    speed: number;
    technique: number;
    stamina: number;
    note?: string;
  };
  cardImage: string;
  heroImage: string;
  accentColor: string;
  badgeColor: string;
  masteredFormsCount: number;
  breathingForms: BreathingForm[];
  isDemon?: boolean;
  threatLevel?: 'Calamity' | 'Extreme' | 'High' | 'Moderate' | 'Ally';
  bloodDemonArt?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  views?: string;
  category: 'epic-battles' | 'breathing-tutorials' | 'training-grounds' | 'featured';
  thumbnail: string;
  formTag?: string;
  description: string;
  themeColor: string;
  videoType?: 'flame' | 'water' | 'thunder' | 'beast' | 'insect' | 'stone' | 'sun' | 'demon';
}

export interface BreathingStyleDetail {
  id: string;
  name: string;
  japanese: string;
  parentStyle?: string;
  derivatives?: string[];
  color: string;
  description: string;
  notableUsers: string[];
  keyForms: { formNum: string; name: string; effect: string }[];
}

export type NavTab = 'home' | 'slayers-wiki' | 'demons-wiki' | 'breathing-styles' | 'videos' | 'fan-zone';

