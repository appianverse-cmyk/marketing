import React from 'react';
import { ArrowRight, Building, Sparkles, UserCheck, Users } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutNexora: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300">
            <span>About Nexora</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built for the{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creator Economy
            </span>
          </h2>

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            <p>
              Nexora was created with a simple idea — <span className="text-white font-semibold">brands should be able to connect with creators who genuinely understand their audience.</span>
            </p>
            <p className="text-sm sm:text-base text-slate-400">
              We focus on building meaningful connections between brands and emerging creators, helping businesses reach communities across India through authentic, relatable voices.
            </p>
          </div>
        </div>

        {/* Visual Ecosystem Architecture: Brand → Nexora → Creator → Audience */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0D1429] via-[#0A0F21] to-[#070A17] border border-white/10 shadow-2xl relative mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              The Nexora Connection Flywheel
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              How Value Flows Across the Ecosystem
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center relative">
            
            {/* 1. Brand */}
            <div className="glass-card p-6 rounded-2xl text-center border-indigo-500/20 relative group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Building className="w-6 h-6" />
              </div>
              <div className="font-extrabold text-white text-base">The Brand</div>
              <p className="text-xs text-slate-400 mt-1">
                Seeks targeted awareness, authentic product trials & trust in regional markets.
              </p>
            </div>

            {/* Connecting Arrow 1 (Desktop) */}
            <div className="hidden md:flex justify-center -mx-4 z-10">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-indigo-300 shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* 2. Nexora */}
            <div className="glass-card p-6 rounded-2xl text-center border-purple-500/30 bg-gradient-to-br from-indigo-950/50 to-purple-950/50 relative shadow-xl shadow-indigo-600/10">
              <div className="inline-block px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-bold text-indigo-300 mb-2">
                Core Engine
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 text-white flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="font-extrabold text-white text-base">Nexora Hub</div>
              <p className="text-xs text-slate-300 mt-1">
                Vets creators, curates campaign briefs, guarantees payouts & handles campaign ops.
              </p>
            </div>

            {/* Connecting Arrow 2 (Desktop) */}
            <div className="hidden md:flex justify-center -mx-4 z-10">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-pink-300 shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* 3. Emerging Creators */}
            <div className="glass-card p-6 rounded-2xl text-center border-pink-500/20 relative group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="font-extrabold text-white text-base">Emerging Creators</div>
              <p className="text-xs text-slate-400 mt-1">
                Craft organic storytelling in native languages without corporate jargon.
              </p>
            </div>

            {/* 4. Loyal Community */}
            <div className="md:col-span-4 lg:col-span-4 mt-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">The Active Audience & Community</h4>
                  <p className="text-xs text-slate-400">
                    Takes action, comments, tags friends, and buys based on real recommendations from creators they trust.
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shrink-0">
                High Commercial Conversion
              </span>
            </div>

          </div>
        </div>

        {/* Indian Presence Strip */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold text-white">Headquartered in India’s Tech Capital</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {siteConfig.contact.address.hub} with localized creator networks across {siteConfig.hubs.length}+ Tier 1 & 2 cities.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Marathi', 'Bengali', 'Gujarati'].map((lang) => (
              <span
                key={lang}
                className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
