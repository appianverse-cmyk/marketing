import React from 'react';
import { HeartHandshake, Users, Globe2, Cpu, Scale, Check, X, Sparkles } from 'lucide-react';

export const WhyNexora: React.FC = () => {
  const pillars = [
    {
      title: 'Authentic Connections',
      description: 'Creators communicate with audiences that trust them like friends. Audiences ask questions in comments instead of scrolling past an obvious sponsored banner.',
      icon: HeartHandshake,
      color: 'from-pink-500/20 to-rose-500/10'
    },
    {
      title: 'Niche Communities',
      description: 'Reach highly relevant audiences instead of only chasing large follower counts. A 30K follower calisthenics creator converts better than a 1M general celebrity.',
      icon: Users,
      color: 'from-indigo-500/20 to-purple-500/10'
    },
    {
      title: 'Regional Reach',
      description: "Access creators across India's diverse markets. Connect directly with localized consumers in Mumbai, Bengaluru, Delhi NCR, Hyderabad, Chennai, and Pune.",
      icon: Globe2,
      color: 'from-cyan-500/20 to-blue-500/10'
    },
    {
      title: 'Data-Driven Matching',
      description: 'Match campaigns with creators based on relevant audience demographics, genuine comment velocity, and true engagement characteristics.',
      icon: Cpu,
      color: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      title: 'Scalable Campaigns',
      description: 'Start with 5 carefully curated creators to test copy and conversion, then scale seamlessly to 50+ creators across multiple Indian states.',
      icon: Scale,
      color: 'from-amber-500/20 to-orange-500/10'
    }
  ];

  const comparisonRows = [
    {
      aspect: 'Engagement Quality',
      traditional: 'Broad, diluted celebrity reach (~1-2% engagement)',
      nexora: 'High-intent micro communities (4.5%–7.5% engagement)'
    },
    {
      aspect: 'Creator Diversity',
      traditional: 'Recycles the same 10-15 saturated lifestyle celebs',
      nexora: 'Fresh, emerging creators who genuinely align with your product'
    },
    {
      aspect: 'Regional & Vernacular',
      traditional: 'Predominantly English/Hindi metro-centric push',
      nexora: 'Native regional voices (Tamil, Telugu, Kannada, Marathi, etc.)'
    },
    {
      aspect: 'Budget Efficiency',
      traditional: 'Huge agency retainers + steep minimum commitments',
      nexora: 'Flexible campaign sizing starting from ₹50,000 pilot budgets'
    },
    {
      aspect: 'Campaign Management',
      traditional: 'Slow coordination with multiple creator talent managers',
      nexora: 'Single streamlined point of contact & automated pipeline'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300">
            <span>The Nexora Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Forward-Thinking Brands{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Choose Nexora
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Big follower counts aren't everything. The right audience is. Here is how Nexora redefines creator partnerships.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-7 rounded-2xl border border-white/10 hover:border-indigo-500/40 group relative overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* Quick CTA Card in the 6th slot */}
          <div className="glass-panel p-7 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 to-purple-950/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Curated for Measurable ROI
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Find creators who fit your brand — not just your budget. We match you with creators whose audiences convert.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-indigo-400">
              <span>Ready to scale?</span>
              <a href="#for-brands" className="hover:underline">
                Explore Brand Solutions →
              </a>
            </div>
          </div>
        </div>

        {/* Comparison Section: Traditional Agency vs Nexora */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/10 bg-white/[0.02]">
            <h3 className="text-lg font-bold text-white">Traditional Agency vs. Nexora Approach</h3>
            <p className="text-xs text-slate-400 mt-1">See how Nexora removes traditional agency friction</p>
          </div>

          {/* Mobile Stacked Card View (sm:hidden) */}
          <div className="sm:hidden p-4 space-y-4">
            {comparisonRows.map((row, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                <div className="font-bold text-xs uppercase tracking-wider text-indigo-300">
                  {row.aspect}
                </div>
                
                {/* Traditional */}
                <div className="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/15 flex items-start gap-2 text-xs text-slate-300">
                  <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-rose-400/90 block">Traditional:</span>
                    <span>{row.traditional}</span>
                  </div>
                </div>

                {/* Nexora */}
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-2 text-xs text-white">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block">The Nexora Way:</span>
                    <span className="font-medium">{row.nexora}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet Table View (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.01]">
                  <th className="py-4 px-6 font-semibold text-slate-400 uppercase tracking-wider">Dimension</th>
                  <th className="py-4 px-6 font-semibold text-rose-400/80 uppercase tracking-wider">Traditional Agency Model</th>
                  <th className="py-4 px-6 font-semibold text-emerald-400 uppercase tracking-wider">The Nexora Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-200">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-white">{row.nexora}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
