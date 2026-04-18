import { motion } from 'motion/react';
import { Home, Sparkles, BookOpen, History, Users } from 'lucide-react';

type Tab = 'home' | 'daily' | 'deep' | 'archive' | 'masters';

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs: { id: Tab; icon: any; label: string }[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'daily', icon: Sparkles, label: 'Daily' },
    { id: 'deep', icon: BookOpen, label: 'Deep' },
    { id: 'archive', icon: History, label: 'Archive' },
    { id: 'masters', icon: Users, label: 'Masters' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] h-[60px] bg-midnight/95 backdrop-blur-md border-t border-gold-luminous/20">
      <div className="h-full max-w-2xl mx-auto flex items-center justify-center gap-6 md:gap-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex items-center gap-2 px-2 py-1 transition-all duration-300"
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-gold-luminous' : 'text-slate-500'}`} />
              <span className={`text-[11px] uppercase tracking-[2px] font-semibold transition-all ${
                isActive ? 'text-gold-luminous opacity-100 border-b border-gold-luminous' : 'text-slate-500 opacity-60 hover:opacity-100'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
