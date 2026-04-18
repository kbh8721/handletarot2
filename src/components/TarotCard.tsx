import { motion, AnimatePresence } from 'motion/react';
import { TarotCard as TarotCardType } from '../constants/tarotCards';

interface TarotCardProps {
  card?: TarotCardType;
  isReversed?: boolean;
  flipped: boolean;
  onClick?: () => void;
  className?: string;
  showDetails?: boolean;
}

export default function TarotCard({ card, isReversed, flipped, onClick, className, showDetails = false }: TarotCardProps) {
  return (
    <div
      className={`relative w-48 h-80 perspective-1000 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', damping: 20, stiffness: 100 }}
      >
        {/* Back of the card */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden glass-morphism border-[3px] border-gold-luminous flex items-center justify-center p-4 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
          <div className="w-full h-full rounded-lg border border-gold-luminous/20 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1a1c2e] to-midnight">
            {/* Ornate Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-gold-luminous)_1px,_transparent_1px)] bg-[size:15px_15px]" />
            <div className="text-gold-luminous/40 font-serif text-xl tracking-[0.3em] rotate-45 select-none">HANDLE</div>
          </div>
        </div>

        {/* Front of the card */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-[3px] border-gold-luminous rotate-y-180 bg-gradient-to-br from-[#1a1c2e] to-midnight shadow-[0_0_40px_rgba(99,102,241,0.3)]">
          <div className={`w-full h-full flex flex-col items-center justify-between p-4 relative ${isReversed ? 'rotate-180' : ''}`}>
             <span className="z-10 text-[9px] uppercase tracking-[0.3em] text-gold-luminous/50">Major Arcana</span>
             <div className="flex-1 w-full my-4 border border-gold-luminous/10 relative overflow-hidden flex items-center justify-center">
                <img
                  src={card?.image || 'https://picsum.photos/seed/tarot/300/500'}
                  alt={card?.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-radial-gradient from-purple-electric/20 to-transparent" />
             </div>
            <div className="z-10 pb-2">
              <h3 className="text-gold-luminous text-center font-serif text-xl leading-tight uppercase tracking-[0.2em]">{card?.name}</h3>
              <span className="block text-center text-[10px] text-gold-luminous/40 mt-1 italic">Subconscious Guide</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details (Optional) */}
      <AnimatePresence>
        {showDetails && flipped && card && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-full mt-4 left-0 w-64 glass-morphism p-4 rounded-lg z-20 shadow-2xl border-gold-luminous/20"
          >
            <h4 className="text-gold-luminous font-serif mb-1">{isReversed ? 'Reversed' : 'Upright'}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isReversed ? card.meaning_reversed : card.meaning_upright}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
