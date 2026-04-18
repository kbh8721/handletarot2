import { motion } from 'motion/react';
import { History, Calendar, Trash2, ChevronRight } from 'lucide-react';
import { Reading } from '../types';

interface ArchiveProps {
  readings: Reading[];
  onClear: () => void;
  onSelectReading: (reading: Reading) => void;
}

export default function Archive({ readings, onClear, onSelectReading }: ArchiveProps) {
  if (readings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center text-slate-700 mb-6">
          <History className="w-10 h-10" />
        </div>
        <h3 className="text-2xl text-slate-500 font-serif mb-2">기록이 비어 있습니다</h3>
        <p className="text-slate-600 max-w-xs uppercase tracking-widest text-[10px]">당신의 고민과 성찰을 채워보세요</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl text-gold-luminous">The Archive</h2>
        <button
          onClick={onClear}
          className="text-slate-600 hover:text-red-400 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest"
        >
          <Trash2 className="w-4 h-4" /> 전체 삭제
        </button>
      </div>

      <div className="space-y-6">
        {readings.sort((a, b) => b.timestamp - a.timestamp).map((reading, idx) => (
          <motion.div
            key={reading.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelectReading(reading)}
            className="group glass-morphism p-6 rounded-2xl border-white/5 hover:border-gold-luminous/30 transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
               <div className="flex -space-x-4">
                  {reading.cards.map((c, i) => (
                    <div
                      key={i}
                      className="w-12 h-20 rounded-lg border border-gold-luminous/20 bg-midnight/80 overflow-hidden relative shadow-md"
                    >
                       <img
                        src={c.card.image}
                        alt={c.card.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
               </div>

               <div>
                  <div className="flex items-center gap-2 text-gold-luminous/60 text-[10px] uppercase tracking-widest mb-1 font-display">
                    <Calendar className="w-3 h-3" />
                    {new Date(reading.timestamp).toLocaleDateString()}
                  </div>
                  <h4 className="text-slate-200 font-medium md:text-lg">
                    {reading.type === 'daily' ? '오늘의 잠재의식 진단' : (reading.topic?.split(':')[1] || '심층 상담')}
                  </h4>
                  <p className="text-slate-500 text-xs line-clamp-1 max-w-md">
                    {reading.interpretation}
                  </p>
               </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-gold-luminous transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
