import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CosmicBackground from './components/CosmicBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import DailyReading from './components/DailyReading';
import DeepReading from './components/DeepReading';
import Archive from './components/Archive';
import Masters from './components/Masters';
import { Reading } from './types';

type Tab = 'home' | 'daily' | 'deep' | 'archive' | 'masters';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [readings, setReadings] = useState<Reading[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load readings from localStorage
    const saved = localStorage.getItem('handle_tarot_readings');
    if (saved) {
      try {
        setReadings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse readings', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('handle_tarot_readings', JSON.stringify(readings));
    }
  }, [readings, isLoaded]);

  const handleReadingComplete = (reading: Reading) => {
    setReadings(prev => [reading, ...prev]);
  };

  const handleClearArchive = () => {
    if (confirm('모든 기록을 삭제하시겠습니까?')) {
      setReadings([]);
    }
  };

  return (
    <div className="relative min-h-screen text-soft-white selection:bg-purple-electric/30 overflow-x-hidden">
      <CosmicBackground />

      {/* Main Layout Grid */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header - visible on desktop, integrated in grid */}
        <header className="hidden lg:flex justify-between items-center px-12 py-8 border-b border-gold-luminous/10">
          <h2 className="text-gold-luminous font-serif text-2xl tracking-[0.2em] uppercase italic">Handle Tarot</h2>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em]">
            <span className="text-slate-500 italic">"Explore your subconscious"</span>
            <div className="w-1 h-1 rounded-full bg-gold-luminous" />
            <span className="text-gold-luminous">Subconscious Gate</span>
          </div>
        </header>

        <div className="flex-1 lg:grid lg:grid-cols-[280px_1fr_280px] lg:gap-0 h-full">
          {/* Left Sidebar - Desktop only */}
          <aside className="hidden lg:flex flex-col p-8 border-r border-gold-luminous/10 bg-midnight/40 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-16 h-16 rounded-full border border-gold-luminous mb-3 flex items-center justify-center text-2xl bg-gradient-to-br from-midnight to-purple-electric/30">
                𓆃
              </div>
              <h3 className="text-lg font-serif">Seeker</h3>
              <p className="text-[10px] opacity-50 uppercase tracking-widest mt-1">Status: Calm Sea</p>
            </div>

            <h3 className="sidebar-title">최근 나의 잠재의식</h3>
            <div className="space-y-1">
              {readings.slice(0, 3).map((r) => (
                <div key={r.id} className="history-item cursor-pointer" onClick={() => setActiveTab('archive')}>
                  <div className="mini-card">
                    {r.cards[0]?.card.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-slate-200">{r.cards[0]?.card.name}</span>
                    <span className="text-[10px] opacity-50">{new Date(r.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
              {readings.length === 0 && (
                <p className="text-[10px] text-slate-600 italic">기록이 없습니다</p>
              )}
            </div>

            <h3 className="sidebar-title mt-10">감정 아카이브</h3>
            <div className="stats-viz">
              <div className="bar h-[40%]" />
              <div className="bar h-[60%]" />
              <div className="bar active h-[90%]" />
              <div className="bar h-[70%]" />
              <div className="bar h-[50%]" />
              <div className="bar h-[85%]" />
              <div className="bar h-[65%]" />
            </div>
          </aside>

          {/* Main Content */}
          <main className="relative pt-10 pb-32 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, filter: 'blur(20px)' }}
                  transition={{ duration: 0.8 }}
                >
                  <Hero onStart={() => setActiveTab('daily')} />
                </motion.div>
              )}

              {activeTab === 'daily' && (
                <motion.div
                  key="daily"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="container mx-auto px-4"
                >
                  <DailyReading onReadingComplete={handleReadingComplete} />
                </motion.div>
              )}

              {activeTab === 'deep' && (
                <motion.div
                  key="deep"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="container mx-auto px-4"
                >
                  <DeepReading onReadingComplete={handleReadingComplete} />
                </motion.div>
              )}

              {activeTab === 'archive' && (
                <motion.div
                  key="archive"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className="container mx-auto px-4"
                >
                  <Archive
                    readings={readings}
                    onClear={handleClearArchive}
                    onSelectReading={(reading) => {
                       alert(`${new Date(reading.timestamp).toLocaleString()}\n\n${reading.interpretation.slice(0, 500)}...`);
                    }}
                  />
                </motion.div>
              )}

              {activeTab === 'masters' && (
                <motion.div
                  key="masters"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="container mx-auto px-4"
                >
                  <Masters />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Right Sidebar - Desktop only */}
          <aside className="hidden lg:flex flex-col p-8 border-l border-gold-luminous/10 bg-midnight/40 backdrop-blur-sm">
            <h3 className="sidebar-title">심층 상담실</h3>
            <div className="space-y-3 mb-10">
              <button 
                onClick={() => setActiveTab('deep')}
                className="w-full flex items-center justify-between p-4 rounded-lg bg-white/3 border border-white/5 hover:border-purple-electric/30 hover:bg-purple-electric/5 transition-all text-xs uppercase tracking-widest text-left"
              >
                <span>💖 연애 & 관계</span>
                <span className="text-gold-luminous">→</span>
              </button>
              <button 
                onClick={() => setActiveTab('deep')}
                className="w-full flex items-center justify-between p-4 rounded-lg bg-white/3 border border-white/5 hover:border-purple-electric/30 hover:bg-purple-electric/5 transition-all text-xs uppercase tracking-widest text-left"
              >
                <span>💼 커리어 & 학업</span>
                <span className="text-gold-luminous">→</span>
              </button>
              <button 
                onClick={() => setActiveTab('deep')}
                className="w-full flex items-center justify-between p-4 rounded-lg bg-white/3 border border-white/5 hover:border-purple-electric/30 hover:bg-purple-electric/5 transition-all text-xs uppercase tracking-widest text-left"
              >
                <span>💰 금전 & 풍요</span>
                <span className="text-gold-luminous">→</span>
              </button>
            </div>

            <h3 className="sidebar-title">마스터 커뮤니티</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5 cursor-pointer" onClick={() => setActiveTab('masters')}>
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-gold-luminous/30" />
                  <div className="flex flex-col">
                    <span className="text-[12px] font-medium">마스터 {i === 1 ? '레오' : i === 2 ? '세린' : '젠'}</span>
                    <span className="text-[10px] opacity-50 italic">영혼의 흐름을 읽는 자</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
