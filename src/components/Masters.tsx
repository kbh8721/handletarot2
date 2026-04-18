import { motion } from 'motion/react';
import { ExternalLink, Star, Award, ShieldCheck } from 'lucide-react';
import { TarotMaster } from '../types';

const MASTERS: TarotMaster[] = [
  {
    id: 'master-1',
    name: 'Master Elena',
    specialty: 'Love & Past Life Regression',
    experience: '12 Years',
    profileImage: 'https://picsum.photos/seed/elena/400/400',
    link: '#'
  },
  {
    id: 'master-2',
    name: 'Grand Master Orion',
    specialty: 'Strategic Career & Wealth Flow',
    experience: '20 Years',
    profileImage: 'https://picsum.photos/seed/orion/400/400',
    link: '#'
  },
  {
    id: 'master-3',
    name: 'Artemis',
    specialty: 'Emotional Healing & Chakra Tarot',
    experience: '8 Years',
    profileImage: 'https://picsum.photos/seed/artemis/400/400',
    link: '#'
  }
];

export default function Masters() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-gold-luminous font-serif mb-4">Master Community</h2>
        <p className="text-slate-400 max-w-xl mx-auto uppercase tracking-[0.2em] text-[10px]">검증된 마스터들이 당신의 깊은 고민에 동행합니다</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MASTERS.map((master, idx) => (
          <motion.div
            key={master.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-morphism rounded-3xl overflow-hidden border-white/5 hover:border-gold-luminous/20 transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={master.profileImage}
                alt={master.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 blur-[1px] group-hover:blur-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
              <div className="absolute top-4 right-4 flex gap-2">
                 <div className="bg-midnight/60 backdrop-blur-md p-1.5 rounded-full border border-gold-luminous/30">
                    <ShieldCheck className="w-4 h-4 text-gold-luminous" />
                 </div>
              </div>
            </div>

            <div className="p-8">
               <div className="flex items-center gap-2 mb-2 text-gold-luminous text-[10px] uppercase tracking-[0.3em] font-display">
                <Star className="w-3 h-3 fill-gold-luminous" /> Verified Master
              </div>
              <h3 className="text-2xl text-slate-100 mb-2">{master.name}</h3>
              <p className="text-purple-electric font-serif italic text-sm mb-6">{master.specialty}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Career</div>
                  <div className="text-sm font-semibold text-slate-300">{master.experience}</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Rating</div>
                  <div className="text-sm font-semibold text-slate-300">5.0 / 5.0</div>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl border border-gold-luminous/30 text-gold-luminous hover:bg-gold-luminous hover:text-midnight transition-all font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                1:1 상담 예약하기 <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
