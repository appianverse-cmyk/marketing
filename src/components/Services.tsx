import React from 'react';
import { Users2, Search, SlidersHorizontal, Globe2, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenBrandModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBrandModal }) => {
  const services = [
    {
      title: 'Micro-Influencer Campaigns',
      description: 'Connect brands with creators who have highly engaged niche communities with genuine follower loyalty.',
      icon: Users2,
      accent: 'from-pink-500/20 to-rose-500/5',
      borderHover: 'hover:border-pink-500/40',
      badge: 'High Engagement',
      features: ['3K - 150K follower focus', 'Higher conversation rates', 'D2C product reviews & seeding']
    },
    {
      title: 'Creator Discovery',
      description: 'Find creators based on category, audience demographic, location, and specific campaign requirements.',
      icon: Search,
      accent: 'from-indigo-500/20 to-blue-500/5',
      borderHover: 'hover:border-indigo-500/40',
      badge: 'Curated Roster',
      features: ['Niche audience matching', 'Engagement authenticity checks', 'Creative style alignment']
    },
    {
      title: 'Campaign Management',
      description: 'Coordinate campaigns from creator selection and creative briefing to deliverable review and execution.',
      icon: SlidersHorizontal,
      accent: 'from-purple-500/20 to-violet-500/5',
      borderHover: 'hover:border-purple-500/40',
      badge: 'End-to-End',
      features: ['Brief writing & approvals', 'Timeline & dispatch tracking', 'Consolidated post reporting']
    },
    {
      title: 'Regional Reach',
      description: 'Connect brands with creators across diverse cities, languages, and cultural communities in India.',
      icon: Globe2,
      accent: 'from-cyan-500/20 to-teal-500/5',
      borderHover: 'hover:border-cyan-500/40',
      badge: 'Vernacular Power',
      features: ['Hindi, Tamil, Telugu & Marathi', 'Tier 1, 2 & 3 city representation', 'Hyperlocal cultural resonance']
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300">
            <span>What Nexora Does</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Influence That Moves{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              People
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Nexora helps brands discover and collaborate with relevant creators across India's rapidly growing social-media ecosystem.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-8 rounded-2xl relative overflow-hidden transition-all duration-300 border border-white/10 ${service.borderHover} group hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Subtle top gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBrandModal}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group cursor-pointer"
          >
            <span>Have a specific campaign in mind? Talk to our strategists</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
