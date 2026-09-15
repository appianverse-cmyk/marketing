import React from 'react';
import { ArrowRight, Sparkles, Building, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface CTASectionProps {
  onOpenBrandModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBrandModal }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#060913]">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 text-center glass-panel border border-white/15 bg-gradient-to-b from-[#0E162F]/90 to-[#0A0E1F]/95 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Next Generation of Indian Creator Marketing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-[1.15]">
            Ready to Create Something That{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Matters?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
            Whether you're a brand looking for the right voice or a creator looking for your next opportunity, Nexora is where the connection starts.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenBrandModal}
              className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl hover:shadow-white/10 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Building className="w-4 h-4 text-indigo-600" />
              <span>I'm a Brand</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={siteConfig.CREATOR_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-4 px-6 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-pink-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              title="Creator Registration Google Form"
            >
              <Sparkles className="w-4 h-4" />
              <span>I'm a Creator</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span>⚡ Takes 2 min for creators to register</span>
            <span>•</span>
            <span>💼 Custom proposals for brands in 24h</span>
          </div>

        </div>
      </div>
    </section>
  );
};
