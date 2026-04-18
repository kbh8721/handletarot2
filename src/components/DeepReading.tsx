import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, RefreshCw, Heart, Briefcase, Landmark } from 'lucide-react';
import TarotCardComponent from './TarotCard';
import { TAROT_CARDS, TarotCard } from '../constants/tarotCards';
import { interpretTarot } from '../services/geminiService';
import { Reading } from '../types';

const TOPICS = [
  { id: 'love', name: '연애 & 관계', icon: Heart, color: 'text-pink-400' },
  { id: 'career', name: '직업 & 학업', icon: Briefcase, color: 'text-blue-400' },
  { id: 'money', name: '금전 & 풍요', icon: Landmark, color: 'text-emerald-400' },
];

export default function DeepReading({ onReadingComplete }: { onReadingComplete: (reading: Reading) => void }) {
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [step, setStep] = useState<'topic' | 'draw' | 'result'>('topic');
  const [selectedCards, setSelectedCards] = useState<{ card: TarotCard; isReversed: boolean }[]>([]);
  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  const startDraw = () => {
    if (topic && question.trim()) {
      setStep('draw');
    }
  };

  const drawCards = async () => {
    setIsLoading(true);
    const deck = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
    const drawn = deck.slice(0, 3).map(card => ({
      card,
      isReversed: Math.random() > 0.8,
    }));
    setSelectedCards(drawn);
    setStep('result');

    // Interpret
    const result = await interpretTarot(
      'deep',
      drawn.map(d => ({ name: d.card.name, position: d.isReversed ? 'reversed' : 'upright' })),
      `${topic}: ${question}`
    );
    setInterpretation(result);

    // Sequential flip animation
    setTimeout(() => setIsFlipped([true, false, false]), 300);
    setTimeout(() => setIsFlipped([true, true, false]), 600);
    setTimeout(() => setIsFlipped([true, true, true]), 900);

    const reading: Reading = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      type: 'deep',
      topic: `${topic}: ${question}`,
      cards: drawn,
      interpretation: result,
    };
    onReadingComplete(reading);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 'topic' && (
          <motion.div
            key="topic-step"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-2xl glass-morphism p-10 rounded-3xl border-gold-luminous/20"
          >
            <h2 className="text-4xl text-gold-luminous text-center mb-8 font-serif">깊은 내면의 통찰</h2>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {TOPICS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTopic(t.name)}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all ${
                    topic === t.name
                      ? 'border-gold-luminous bg-gold-luminous/10 text-gold-luminous'
                      : 'border-white/5 hover:border-gold-luminous/30 text-slate-400'
                  }`}
                >
                  <t.icon className={`w-8 h-8 ${topic === t.name ? t.color : ''}`} />
                  <span className="text-xs font-semibold uppercase tracking-widest">{t.name}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <label className="text-slate-400 text-sm font-medium">당신의 고민이나 질문을 들려주세요</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="예: 다가올 새로운 비즈니스 기회에 대해 알고 싶습니다."
                className="w-full bg-midnight/50 border border-white/10 rounded-xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-gold-luminous transition-colors"
                rows={4}
              />
            </div>

            <button
              disabled={!topic || !question.trim()}
              onClick={startDraw}
              className="w-full mt-8 bg-gold-luminous text-midnight font-bold py-4 rounded-xl hover:bg-gold-luminous/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              운명 확인하기 <Send className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {step === 'draw' && (
          <motion.div
            key="draw-step"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl text-gold-luminous mb-2 font-serif italic">"{question}"</h2>
              <p className="text-slate-500 uppercase tracking-[0.3em] text-xs">운명의 흐름을 위해 세 장의 카드를 준비합니다</p>
            </div>

            <div className="relative group cursor-pointer" onClick={drawCards}>
               <div className="flex -space-x-24">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-48 h-80 glass-morphism rounded-xl border border-gold-luminous/30 flex items-center justify-center shadow-2xl transform transition-transform group-hover:-translate-y-4"
                    style={{ zIndex: i }}
                  >
                    <div className="text-gold-luminous/20 text-xs">HANDLE</div>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <p className="text-gold-luminous uppercase tracking-widest text-sm animate-pulse">카드를 탭하여 셔플을 멈추세요</p>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result-step"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full space-y-12"
          >
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 overflow-x-auto pb-8">
              {selectedCards.map((c, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <span className="text- gold-luminous/40 font-serif italic text-sm">
                    {i === 0 ? 'Past' : i === 1 ? 'Present' : 'Future'}
                  </span>
                  <TarotCardComponent
                    card={c.card}
                    isReversed={c.isReversed}
                    flipped={isFlipped[i]}
                  />
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              {isLoading ? (
                  <div className="flex flex-col items-center gap-6 py-12">
                    <div className="relative">
                      <RefreshCw className="w-12 h-12 text-gold-luminous animate-spin" />
                      <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-electric animate-pulse" />
                    </div>
                    <p className="text-gold-luminous/80 font-serif italic text-xl">세 카드의 얽힌 운명을 핸들 타로 마스터가 해석 중입니다...</p>
                    <div className="w-full max-w-sm h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 5 }}
                        className="h-full bg-purple-electric"
                      />
                    </div>
                  </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-morphism p-10 rounded-3xl border-purple-electric/20"
                >
                   <div className="flex items-center gap-3 mb-8 text-purple-electric border-b border-white/5 pb-6">
                      <Sparkles className="w-6 h-6" />
                      <h3 className="text-xl uppercase tracking-[0.2em] font-display">Infinite Insight</h3>
                    </div>

                    <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-p:text-lg prose-p:leading-relaxed">
                      {interpretation.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-6">{para}</p>
                      ))}
                    </div>

                    <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-8">
                      <button
                        onClick={() => setStep('topic')}
                        className="text-slate-500 hover:text-gold-luminous text-sm uppercase tracking-widest flex items-center gap-2 transition-colors"
                      >
                        <RefreshCw className="w-4 h-4" /> 새로운 상담 시작
                      </button>
                    </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
