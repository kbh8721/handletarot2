import { motion } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-electric/5 blur-[120px] rounded-full animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-luminous/20 bg-gold-luminous/5 text-gold-luminous text-[10px] uppercase tracking-[0.3em] font-display">
          <Sparkles className="w-3 h-3" /> Explore Your Subconscious
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl text-gold-luminous tracking-tight leading-[0.9] font-serif">
          Handle <br /> <span className="italic opacity-80">Tarot</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed"
        >
          당신 마음의 핸들은 어디를 향하고 있나요? <br />
          심해와 우주의 경계에서 당신의 내면을 비추는 거울을 만나보세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="pt-12"
        >
          <button
            onClick={onStart}
            className="group relative px-12 py-5 overflow-hidden rounded-full border border-gold-luminous/30 text-gold-luminous font-semibold uppercase tracking-[0.2em] transition-all hover:bg-gold-luminous hover:text-midnight"
          >
            <span className="relative z-10">내면의 빛 발견하기</span>
            <div className="absolute inset-0 bg-gold-luminous/10 translate-y-full transition-transform group-hover:translate-y-0" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-600 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll to reveal</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </div>
  );
}
