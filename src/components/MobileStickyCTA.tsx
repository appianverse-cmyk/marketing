import React from 'react';
import { Sparkles, Building2, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface MobileStickyCTAProps {
  onOpenBrandModal: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBrandModal }) => {
  return (
    <aside 
      aria-label="Quick Actions"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090D1A]/95 backdrop-blur-xl border-t border-white/10 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] px-4 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.5)] flex items-center gap-2.5"
    >
      {/* Brand Button */}
      <button
        onClick={onOpenBrandModal}
        className="w-1/2 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
      >
        <Building2 className="w-3.5 h-3.5 text-indigo-400" />
        <span>For Brands</span>
      </button>

      {/* Creator Button to Google Form */}
      <a
        href={siteConfig.CREATOR_GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 py-2.5 px-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/20 active:scale-95 transition-transform"
        title="Creator Registration Google Form"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Join as Creator</span>
        <ArrowUpRight className="w-3 h-3" />
      </a>
    </aside>
  );
};
