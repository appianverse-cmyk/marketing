import React, { useState } from 'react';
import { Compass, Target, MessageSquareShare, TrendingUp, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const [activeView, setActiveView] = useState<'brands' | 'creators'>('brands');

  const icons = [Compass, Target, MessageSquareShare, TrendingUp];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#090D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300">
            <span>Seamless Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How It{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A transparent 4-step workflow engineered to eliminate agency friction and maximize creator authenticity.
          </p>

          {/* Perspective Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 mt-4">
            <button
              onClick={() => setActiveView('brands')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeView === 'brands'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Brands & Marketers
            </button>
            <button
              onClick={() => setActiveView('creators')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeView === 'creators'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Emerging Creators
            </button>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={step.number}
                className="glass-card p-6 sm:p-7 rounded-2xl relative border border-white/10 hover:border-indigo-500/40 group flex flex-col justify-between"
              >
                {/* Step Number Top Banner */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono tracking-wider bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs text-indigo-300 font-semibold mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeView === 'brands' ? step.brandDesc : step.creatorDesc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono">Phase {step.number}</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Flow</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
