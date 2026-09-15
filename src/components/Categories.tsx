import React, { useState } from 'react';
import { Sparkles, Shirt, Utensils, Compass, Activity, Cpu, TrendingUp, Gamepad2, Home, Languages, GraduationCap, Film, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import { siteConfig } from '../config/siteConfig';

export const Categories: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'lifestyle' | 'tech' | 'regional'>('all');

  const iconMap: Record<string, React.ElementType> = {
    Shirt,
    Sparkles,
    Utensils,
    Compass,
    Activity,
    Cpu,
    TrendingUp,
    Gamepad2,
    Home,
    Languages,
    GraduationCap,
    Film,
  };

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (selectedFilter === 'lifestyle') {
      return ['fashion', 'beauty', 'food', 'travel', 'lifestyle', 'fitness'].includes(cat.id);
    }
    if (selectedFilter === 'tech') {
      return ['tech', 'gaming', 'finance', 'education'].includes(cat.id);
    }
    if (selectedFilter === 'regional') {
      return ['regional', 'entertainment', 'food'].includes(cat.id);
    }
    return true;
  });

  return (
    <section id="categories" className="py-24 relative overflow-hidden bg-[#070B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300">
            <span>Diverse Indian Creator Landscape</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Creators Across Every{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Community
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            From tier-1 tech enthusiasts to vernacular culinary storytellers, connect with specialized micro-communities that traditional media misses.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Categories (12)' },
              { id: 'lifestyle', label: 'Lifestyle & D2C' },
              { id: 'tech', label: 'Tech & FinTech' },
              { id: 'regional', label: 'Regional & Culture' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCategories.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Sparkles;
            return (
              <div
                key={cat.id}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-indigo-500/40 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300 group-hover:scale-105 group-hover:bg-indigo-600/20 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {cat.growth}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cat.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer status */}
                  <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-medium text-slate-400">{cat.creatorCount}</span>
                    <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      <span>Curated</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about network expansion */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-slate-200 font-semibold">Expanding Every Week:</span> Don't see your specific niche listed? Nexora's scouting team sources specialized creators on demand for custom campaigns.
          </p>
          <div className="mt-3">
            <a
              href={siteConfig.CREATOR_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Have a unique niche? Join our creator waitlist →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
