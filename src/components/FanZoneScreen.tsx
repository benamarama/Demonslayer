import React, { useState } from 'react';
import { SLAYER_CORPS_LOGO } from '../data/demonSlayerData';
import { playSwordSlashSound } from '../utils/audio';

interface QuizQuestion {
  question: string;
  options: {
    text: string;
    style: 'water' | 'flame' | 'thunder' | 'beast' | 'insect' | 'sun';
    points: string;
  }[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    question: 'You face an Upper Rank demon in an enclosed forest. What is your initial battle response?',
    options: [
      { text: 'Adapt my stance to the terrain, looking for the enemy’s opening thread.', style: 'water', points: 'Water Breathing' },
      { text: 'Ignite my fighting spirit and charge forward with an explosive strike!', style: 'flame', points: 'Flame Breathing' },
      { text: 'Lower my center of gravity and strike before they can even perceive my motion.', style: 'thunder', points: 'Thunder Breathing' },
      { text: 'Trust my primal senses, dislocate joints if needed, and tear through them head-on.', style: 'beast', points: 'Beast Breathing' },
      { text: 'Analyze the demon\'s anatomy to inject precise lethal Wisteria neurotoxins.', style: 'insect', points: 'Insect Breathing' },
    ]
  },
  {
    question: 'When gripping your Nichirin Katana for the first time, what core value guides your blade?',
    options: [
      { text: 'Compassion for both victims and fallen adversaries.', style: 'water', points: 'Water Breathing' },
      { text: 'The burning duty of the strong to protect the weak at any cost.', style: 'flame', points: 'Flame Breathing' },
      { text: 'Perfection of a single supreme technique honed to the absolute limit.', style: 'thunder', points: 'Thunder Breathing' },
      { text: 'Unfiltered survival instinct and untamed mountain pride.', style: 'beast', points: 'Beast Breathing' },
      { text: 'Cold intellect, pharmacologic mastery, and unrelenting swiftness.', style: 'insect', points: 'Insect Breathing' },
    ]
  },
  {
    question: 'How do you sustain Total Concentration Breathing Constant during prolonged combat?',
    options: [
      { text: 'By maintaining rhythmic, tranquil ocean-like respiration.', style: 'water', points: 'Water Breathing' },
      { text: 'By stoking my heart like a furnace to fuel volcanic muscular power.', style: 'flame', points: 'Flame Breathing' },
      { text: 'Through hyper-oxygenating my calf muscles for instantaneous velocity.', style: 'thunder', points: 'Thunder Breathing' },
      { text: 'By breathing violently through my nose to track subtle atmospheric shifts.', style: 'beast', points: 'Beast Breathing' },
      { text: 'Through micro-calibrated diaphragm contractions for pinpoint thrusting.', style: 'insect', points: 'Insect Breathing' },
    ]
  },
  {
    question: 'Which element resonates most strongly with your fighting spirit?',
    options: [
      { text: 'Fluid Water that adapts to whatever container it occupies.', style: 'water', points: 'Water Breathing' },
      { text: 'Roaring Flame that burns through all darkness and despair.', style: 'flame', points: 'Flame Breathing' },
      { text: 'Piercing Lightning that tears across the night sky in an instant.', style: 'thunder', points: 'Thunder Breathing' },
      { text: 'Savage Wind & Fang that rule the untamed wilderness.', style: 'beast', points: 'Beast Breathing' },
      { text: 'The delicate yet lethal sting of the deadly wasp.', style: 'insect', points: 'Insect Breathing' },
    ]
  }
];

const STYLE_RESULTS = {
  water: {
    name: 'Water Breathing (水の呼吸)',
    bladeColor: 'Deep Ocean Blue (青)',
    rank: 'Mizunoto (癸)',
    hashiraMentor: 'Giyu Tomioka',
    desc: 'You possess calm clarity and unmatched adaptability. Like water, you can bend around any obstacle and neutralize lethal attacks with absolute tranquility.',
    quote: '"Flow like water, strike like the roaring tide."'
  },
  flame: {
    name: 'Flame Breathing (炎の呼吸)',
    bladeColor: 'Crimson Red (赤)',
    rank: 'Mizunoto (癸)',
    hashiraMentor: 'Kyojuro Rengoku',
    desc: 'You burn with an unyielding sense of honor. Your sword techniques channel explosive heat and devastating morale that inspires every ally on the battlefield.',
    quote: '"Set your heart ablaze and stand tall with pride!"'
  },
  thunder: {
    name: 'Thunder Breathing (雷の呼吸)',
    bladeColor: 'Amber Yellow (黄)',
    rank: 'Mizunoto (癸)',
    hashiraMentor: 'Jigoro Kuwajima',
    desc: 'You possess supersonic reflexes. When pushed to the brink, your hyper-focused strikes break the sound barrier before your opponent can even blink.',
    quote: '"Hone one thing to absolute perfection."'
  },
  beast: {
    name: 'Beast Breathing (獣の呼吸)',
    bladeColor: 'Indigo-Grey (藍鼠)',
    rank: 'Mizunoto (癸)',
    hashiraMentor: 'Inosuke Hashibira',
    desc: 'You fight with primal ferocity and extraordinary spatial awareness. Unbound by traditional forms, your serrated dual blades tear through all demonic schemes.',
    quote: '"King of the Mountain, coming through!"'
  },
  insect: {
    name: 'Insect Breathing (蟲の呼吸)',
    bladeColor: 'Lavender Purple (紫)',
    rank: 'Mizunoto (癸)',
    hashiraMentor: 'Shinobu Kocho',
    desc: 'You strike with precision and medical mastery. While your physical frame may be light, your poisoned stinger blade delivers swift, unavoidable defeat to any demon.',
    quote: '"A gentle flutter with a lethal sting."'
  },
  sun: {
    name: 'Sun Breathing / Hinokami Kagura',
    bladeColor: 'Pitch Black (漆黒)',
    rank: 'Mizunoto (癸)',
    hashiraMentor: 'Tanjiro Kamado',
    desc: 'You carry the rare spark of the primordial breathing style. Your sword radiates the purity of the sun itself, burning away demonic regeneration at its root.',
    quote: '"Pass down the flame without letting it extinguish."'
  }
};

export const FanZoneScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [slayerName, setSlayerName] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [resultStyle, setResultStyle] = useState<keyof typeof STYLE_RESULTS>('water');

  const startExam = () => {
    if (!slayerName.trim()) return;
    playSwordSlashSound('fire');
    setAnswers([]);
    setCurrentQuestion(0);
    setCurrentStep('quiz');
  };

  const handleSelectOption = (style: 'water' | 'flame' | 'thunder' | 'beast' | 'insect' | 'sun') => {
    if (style === 'thunder') playSwordSlashSound('thunder');
    else if (style === 'flame' || style === 'sun') playSwordSlashSound('fire');
    else if (style === 'water') playSwordSlashSound('water');
    else playSwordSlashSound('slash');

    const updatedAnswers = [...answers, style];
    setAnswers(updatedAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate majority style
      const counts: Record<string, number> = {};
      updatedAnswers.forEach((s) => {
        counts[s] = (counts[s] || 0) + 1;
      });
      let maxStyle = 'water';
      let maxCount = 0;
      for (const [k, v] of Object.entries(counts)) {
        if (v > maxCount) {
          maxCount = v;
          maxStyle = k;
        }
      }
      setResultStyle(maxStyle as keyof typeof STYLE_RESULTS);
      setCurrentStep('result');
    }
  };

  const certificateData = STYLE_RESULTS[resultStyle];

  return (
    <div className="space-y-12 pb-20 animate-fadeIn">
      
      {/* Header - Editorial Style */}
      <section className="bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#C5A48A]/10 border border-[#C5A48A]/30">
            <span className="material-symbols-outlined text-[16px] text-[#C5A48A]">
              military_tech
            </span>
            <span className="font-label-bold text-[10px] text-[#C5A48A] tracking-[0.25em] uppercase">
              FINAL SELECTION PORTAL • APTITUDE ASSESSMENT
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl text-[#F5F5F5] tracking-tight">
            Corps Induction <span className="italic text-[#C5A48A]">Exam</span>
          </h1>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed font-light">
            Take the official Final Selection aptitude assessment to determine your inherent breathing style affinity,
            Nichirin Katana blade color, and receive your official Demon Slayer Corps Induction Certificate.
          </p>
        </div>
      </section>

      {/* Main Interactive Container */}
      <div className="max-w-3xl mx-auto bg-[#141414] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl">
        
        {/* Step 1: Candidate Entry */}
        {currentStep === 'intro' && (
          <div className="space-y-6 text-center py-4">
            <div className="w-20 h-20 mx-auto rounded-sm overflow-hidden border border-[#C5A48A]/60 p-2 bg-[#0A0A0A] shadow-lg">
              <img
                src={SLAYER_CORPS_LOGO}
                alt="Corps Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight">
                Candidate Registration
              </h2>
              <p className="text-xs text-white/40 font-sans mt-1 font-light">
                Enter your identity to initiate Mount Fujikasane testing protocols.
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                id="input-candidate-name"
                placeholder="Enter your Slayer Name (e.g., Tanjiro, Ryuto)..."
                value={slayerName}
                onChange={(e) => setSlayerName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-white/15 focus:border-[#C5A48A] rounded-sm text-center font-serif-display text-lg text-[#F5F5F5] placeholder-white/30 focus:outline-none transition-colors"
              />

              <button
                onClick={startExam}
                disabled={!slayerName.trim()}
                id="btn-start-induction-exam"
                className={`w-full py-3.5 rounded-sm font-label-bold text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 ${
                  slayerName.trim()
                    ? 'bg-[#C5A48A] hover:bg-[#E5D3C5] text-black shadow-[0_4px_16px_rgba(197,164,138,0.3)]'
                    : 'bg-[#1A1A1A] text-white/20 cursor-not-allowed border border-white/5'
                }`}
              >
                <span>BEGIN FINAL SELECTION TEST</span>
                <span className="material-symbols-outlined text-[16px]">
                  swords
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Quiz in Progress */}
        {currentStep === 'quiz' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[10px] font-label-bold text-[#C5A48A] uppercase tracking-[0.2em]">
                QUESTION {currentQuestion + 1} OF {QUESTIONS.length}
              </span>
              <span className="text-xs font-mono text-white/40">
                CANDIDATE: <strong className="text-white/90">{slayerName}</strong>
              </span>
            </div>

            <h3 className="font-serif-display text-lg sm:text-2xl text-[#F5F5F5] leading-relaxed">
              {QUESTIONS[currentQuestion].question}
            </h3>

            <div className="space-y-3 pt-2">
              {QUESTIONS[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.style)}
                  id={`btn-quiz-option-${idx}`}
                  className="w-full text-left p-4 rounded-sm bg-[#181818] hover:bg-[#202020] border border-white/10 hover:border-[#C5A48A]/60 transition-all flex items-center justify-between group"
                >
                  <span className="text-sm text-white/80 font-sans group-hover:text-white transition-colors pr-4 font-light">
                    {option.text}
                  </span>
                  <span className="material-symbols-outlined text-white/30 group-hover:text-[#C5A48A] group-hover:translate-x-1 transition-all flex-shrink-0 text-[18px]">
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Certificate Result */}
        {currentStep === 'result' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* The Certificate UI - Editorial Certificate Style */}
            <div className="relative rounded-sm border border-[#C5A48A]/40 bg-[#0F0F0F] p-6 sm:p-10 shadow-2xl overflow-hidden">
              
              {/* Decorative Watermark Kanji */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 font-serif-display text-8xl text-white/5 pointer-events-none select-none">
                滅
              </div>

              {/* Certificate Top Header */}
              <div className="text-center space-y-2 border-b border-white/10 pb-6">
                <div className="w-12 h-12 mx-auto rounded-sm overflow-hidden border border-[#C5A48A] p-1 bg-[#141414]">
                  <img
                    src={SLAYER_CORPS_LOGO}
                    alt="Corps Seal"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="font-serif-display text-2xl sm:text-3xl text-[#F5F5F5] tracking-tight">
                  Demon Slayer Corps Induction
                </h2>
                <p className="text-[10px] font-label-bold text-[#C5A48A] tracking-[0.25em] uppercase">
                  OFFICIAL CORPS ACCREDITATION • MT. FUJIKASANE SELECTION
                </p>
              </div>

              {/* Candidate Info Grid */}
              <div className="my-6 space-y-4">
                <div className="text-center">
                  <span className="text-[10px] font-label-bold text-white/40 uppercase tracking-[0.2em]">
                    CERTIFIED RECRUIT
                  </span>
                  <div className="font-serif-display text-3xl sm:text-4xl text-[#C5A48A] mt-0.5 font-normal">
                    {slayerName}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-[#141414] rounded-sm border border-white/10 text-center">
                    <span className="text-[9px] font-label-bold text-white/40 uppercase tracking-[0.16em]">
                      ASSIGNED STYLE
                    </span>
                    <div className="font-serif-display text-sm text-[#F5F5F5] mt-1">
                      {certificateData.name}
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#141414] rounded-sm border border-white/10 text-center">
                    <span className="text-[9px] font-label-bold text-white/40 uppercase tracking-[0.16em]">
                      BLADE COLOR
                    </span>
                    <div className="font-serif-display text-sm text-[#9ECFD1] mt-1">
                      {certificateData.bladeColor}
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#141414] rounded-sm border border-white/10 text-center">
                    <span className="text-[9px] font-label-bold text-white/40 uppercase tracking-[0.16em]">
                      INITIAL RANK
                    </span>
                    <div className="font-serif-display text-sm text-[#C5A48A] mt-1">
                      {certificateData.rank}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#141414] rounded-sm border border-white/10 space-y-2">
                  <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed font-light">
                    {certificateData.desc}
                  </p>
                  <p className="text-xs italic text-[#C5A48A] font-serif-editorial text-right">
                    {certificateData.quote}
                  </p>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[10px] font-label-bold text-white/40 uppercase tracking-widest">
                <div>
                  <span className="block text-white/30">SUPERVISING HASHIRA</span>
                  <span className="text-white/80">{certificateData.hashiraMentor}</span>
                </div>
                <div className="text-right">
                  <span className="block text-white/30">HEADQUARTERS</span>
                  <span className="text-[#9ECFD1]">APPROVED FOR FIELD DUTY</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  playSwordSlashSound('slash');
                  setCurrentStep('intro');
                }}
                className="px-6 py-2.5 bg-[#141414] hover:bg-[#1E1E1E] text-white/70 hover:text-[#C5A48A] border border-white/10 hover:border-[#C5A48A]/40 rounded-sm font-label-bold text-xs tracking-[0.16em] uppercase transition-colors"
              >
                RETAKE APTITUDE EXAM
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
