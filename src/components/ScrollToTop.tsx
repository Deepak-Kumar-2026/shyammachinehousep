import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Push to top page"
      className="fixed bottom-20 left-4 sm:left-6 z-50 bg-slate-900 hover:bg-orange-600 text-white px-3.5 py-2.5 rounded-xl shadow-2xl border-2 border-orange-500/80 transition-all transform hover:scale-105 flex items-center gap-2 group cursor-pointer"
      id="scroll-to-top-button"
      title="Push to top page"
    >
      <ArrowUp className="w-5 h-5 text-orange-400 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
      <span className="hidden sm:inline text-xs font-black uppercase tracking-wider text-slate-200 group-hover:text-white">
        Push To Top
      </span>
    </button>
  );
};
