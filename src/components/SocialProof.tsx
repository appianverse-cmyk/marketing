import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const SocialProof: React.FC = () => {
  return (
    <section className="relative py-12 bg-[#060913] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-3 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for the new generation of marketing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Connecting Real Voices Across India's Digital Hubs
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Measurable engagement metrics powered by genuine community trust.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-6 rounded-2xl text-center relative overflow-hidden group hover:border-indigo-500/40"
            >
              {/* Subtle top indicator */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-indigo-400 font-medium">
                {stat.change}
              </div>

              {/* Editable placeholder tag in code */}
              <div className="mt-3 inline-block">
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  Roster Metric
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cities Marquee / Badges */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>Active Creator Hubs:</span>
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {siteConfig.hubs.map((hub) => (
                <span
                  key={hub.city}
                  className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:text-white transition-colors"
                >
                  {hub.city}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
