import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw } from 'lucide-react';
import TarotCardComponent from './TarotCard';
import { TAROT_CARDS, TarotCard } from '../constants/tarotCards';
import { interpretTarot } from '../services/geminiService';
import { Reading } from '../types';

export default function DailyReading({ onReadingComplete }: { onReadingComplete: (reading: Reading) => void }) {
  const [selectedCard, setSelectedCard] = useState<{ card: TarotCard; isReversed: boolean } | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const pullCard = async () => {
    if (isLoading) return;

    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
    const card = TAROT_CARDS[randomIndex];
    const isReversed = Math.random() > 0.85; // 15% chance reversed for some flavor

    setSelectedCard({ card, isReversed });

    // Flip after a short delay
    setTimeout(() => setIsFlipped(true), 500);

    const result = await interpretTarot('daily', [{ name: card.name, position: isReversed ? 'reversed' : 'upright' }]);
    setInterpretation(result);

    const reading: Reading = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      type: 'daily',
      cards: [{ card, isReversed }],
      interpretation: result,
    };

    onReadingComplete(reading);
    setIsLoading(false);
  };

  const reset = () => {
    setSelectedCard(null);
    setIsFlipped(false);
    setInterpretation('');
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl mb-4 text-gold-luminous">Daily Subconscious Check</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          오늘 당신의 내면이 보내는 신호를 확인해보세요. 하나의 카드가 당신의 잠재의식을 비춥니다.
        </p>
      </motion.div>

      <div className="relative h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!selectedCard ? (
            <motion.div
              key="deck"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative group flex items-center justify-center"
              onClick={pullCard}
            >
               {/* Decorative card fan behind */}
              <div className="absolute w-48 h-80 glass-morphism rounded-xl border border-gold-luminous/10 rotate-[-15deg] translate-x-[-20px] transition-transform group-hover:rotate-[-20deg]" />
              <div className="absolute w-48 h-80 glass-morphism rounded-xl border border-gold-luminous/10 rotate-[15deg] translate-x-[20px] transition-transform group-hover:rotate-[20deg]" />

              <TarotCardComponent flipped={false} className="z-10 shadow-2xl" />

              <div className="absolute -bottom-16 w-full text-center">
                <button className="text-gold-luminous border border-gold-luminous/30 px-6 py-2 rounded-full hover:bg-gold-luminous/10 transition-colors uppercase tracking-[0.2em] text-xs font-semibold">
                  카드 한 장 뽑기
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col md:flex-row items-center gap-12 max-w-4xl"
            >
              <TarotCardComponent
                card={selectedCard.card}
                isReversed={selectedCard.isReversed}
                flipped={isFlipped}
                showDetails={true}
              />

              <div className="flex-1 space-y-6">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <RefreshCw className="w-8 h-8 text-gold-luminous animate-spin" />
                    <p className="text-gold-luminous/60 font-serif italic">우주의 기운을 읽는 중입니다...</p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl bg-purple-electric/5 border border-purple-electric opacity-90 backdrop-blur-md max-w-md"
                  >
                    <div className="flex items-center gap-2 mb-4 text-gold-luminous justify-center">
                      <Sparkles className="w-5 h-5" />
                      <h4 className="text-sm uppercase tracking-[0.3em] font-serif italic">오늘의 잠재의식 해석</h4>
                    </div>
                    <div className="prose prose-invert prose-p:text-soft-white/90 prose-p:leading-relaxed prose-p:text-sm text-center">
                      {interpretation.split('\n').map((para, i) => (
                        <p key={i} className="mb-4">{para}</p>
                      ))}
                    </div>

                    <button
                      onClick={reset}
                      className="mt-6 text-slate-500 hover:text-gold-luminous text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" /> 다시 뽑기
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
