import React from 'react';
import { ArrowRight, Sparkles, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { FEATURED_CREATORS } from '../data/mockData';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';

interface HeroProps {
  onOpenBrandModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrandModal }) => {
  const topCreators = FEATURED_CREATORS.slice(0, 3);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span>India's Emerging Influencer Engine</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">Micro-Influencers, Macro Impact</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Your Brand Deserves More Than Just{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Reach.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Nexora connects brands with the right creators to build authentic conversations, stronger communities, and campaigns that actually connect.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBrandModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 hover:shadow-xl hover:shadow-white/10 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>For Brands</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-sm hover:shadow-xl hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                title="Register your creator profile (Google Form)"
              >
                <Sparkles className="w-4 h-4" />
                <span>Join as a Creator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Micro-Proofs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Vetted micro-influencers only</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Pan-India vernacular reach</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero creator onboarding fees</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Indian Creator Cards Ecosystem */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Card 1: Primary Featured Creator (Mumbai - Fashion) */}
              <div className="glass-panel p-5 rounded-2xl shadow-2xl relative z-20 border border-white/10 animate-float-slow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={topCreators[0].avatar}
                        alt={topCreators[0].name}
                        className="w-13 h-13 rounded-full object-cover ring-2 ring-indigo-500/40"
                      />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-[#090D1A]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-white text-sm">{topCreators[0].name}</h4>
                        <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-500/30">
                          {topCreators[0].handle}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-pink-400" />
                        <span>{topCreators[0].city}, India</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-300">{topCreators[0].niche}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400">
                    <InstagramIcon size={16} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div>
                    <div className="text-lg font-extrabold text-white tracking-tight">{topCreators[0].followers}</div>
                    <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Followers</div>
                  </div>
                  <div className="border-l border-white/10">
                    <div className="text-lg font-extrabold text-emerald-400 tracking-tight">{topCreators[0].engagement}</div>
                    <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Engagement</div>
                  </div>
                </div>

                <div className="mt-3.5 flex items-center justify-between text-xs pt-3 border-t border-white/5">
                  <span className="text-[11px] text-slate-400">Recent Collab:</span>
                  <span className="text-[11px] font-medium text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                    {topCreators[0].recentCollab}
                  </span>
                </div>
              </div>

              {/* Card 2: Secondary Floating Creator (Bengaluru - Tech) */}
              <div className="glass-panel p-4 rounded-2xl shadow-xl relative z-30 -mt-6 sm:-mt-8 ml-6 sm:ml-12 border border-white/10 animate-float-reverse bg-[#0C1226]/90">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={topCreators[1].avatar}
                      alt={topCreators[1].name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500/40"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white text-xs">{topCreators[1].name}</span>
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1 rounded">
                          {topCreators[1].engagement} Eng
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400">
                        <MapPin className="w-2.5 h-2.5 text-indigo-400" />
                        <span>{topCreators[1].city}</span>
                        <span>•</span>
                        <span>{topCreators[1].niche}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-400 p-1 bg-red-500/10 rounded">
                    <YoutubeIcon size={14} />
                  </div>
                </div>
              </div>

              {/* Card 3: Floating Micro Badge (Chennai / Regional Food) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 z-30 glass-panel px-4 py-2.5 rounded-xl border border-indigo-500/30 flex items-center gap-3 shadow-2xl bg-[#0F172A]/95">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-pink-500 flex items-center justify-center text-white">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>Campaign Match Found</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Pooja I. (Chennai) • 7.1% Engagement
                  </div>
                </div>
              </div>

              {/* Decorative Background Ring */}
              <div className="absolute -inset-4 rounded-3xl border border-indigo-500/20 -z-10 transform rotate-2 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
