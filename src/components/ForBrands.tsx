import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Users, Building, CheckCircle2 } from 'lucide-react';

interface ForBrandsProps {
  onOpenBrandModal: () => void;
}

export const ForBrands: React.FC<ForBrandsProps> = ({ onOpenBrandModal }) => {
  const brandPillars = [
    {
      title: 'Targeted ROI, Not Vanity Numbers',
      desc: 'Micro-creators boast genuine engagement rates of 4%–8%, driving actual clicks, saves, and conversations instead of ignored sponsored banners.',
      icon: BarChart3
    },
    {
      title: 'Zero Ghosting or Missed Deadlines',
      desc: 'Nexora manages contract signoffs, product shipments, creative revisions, and delivery dates so your marketing calendar stays on track.',
      icon: ShieldCheck
    },
    {
      title: 'Hyperlocal Vernacular Impact',
      desc: 'Tap into loyal regional audiences in Hindi, Tamil, Telugu, Marathi, and Kannada with native language creators who resonate deeply.',
      icon: Zap
    },
    {
      title: 'Diverse Multi-Creator Rosters',
      desc: 'Instead of putting your entire budget into a single celebrity, activate 10 to 30 niche storytellers to build massive social proof.',
      icon: Users
    }
  ];

  return (
    <section id="for-brands" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090D1A] via-[#0C1226] to-[#090D1A]">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-[#0E152E]/90 via-[#0B1024]/95 to-[#080B18]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Story & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                <Building className="w-3.5 h-3.5" />
                <span>For Growth & Consumer Brands</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Looking to Make Your Brand{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Heard?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Tell us about your brand and campaign goals. We'll help you find creators who align with your audience, budget, and business objectives.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBrandModal}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:shadow-2xl hover:shadow-indigo-600/30 hover:scale-[1.02] text-white font-bold text-sm transition-all flex items-center gap-3 cursor-pointer group"
                >
                  <span>Start a Campaign</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <p className="text-xs text-slate-400 mt-3">
                  ⚡ Custom creator matching proposal ready within 24 hours.
                </p>
              </div>

              {/* Trust bullet checklist */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified audience authenticity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clear usage rights & licensing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High-intent comments & shares</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Post-campaign metrics reporting</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brandPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/30 transition-all space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
