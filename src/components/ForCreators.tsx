import React from 'react';
import { Sparkles, ArrowUpRight, Shield, HeartHandshake, Banknote, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ForCreators: React.FC = () => {
  const creatorPerks = [
    {
      title: 'Paid Brand Collaborations',
      desc: 'Get matched with verified D2C, tech, and lifestyle brands that pay fair commercial rates for your creative efforts.',
      icon: Banknote,
    },
    {
      title: '100% Free Roster Registration',
      desc: 'Zero registration fee, no hidden commission, and no monthly membership cost. You keep your entire agreed sponsorship payout.',
      icon: Shield,
    },
    {
      title: 'Creative Freedom & Clear Briefs',
      desc: 'No vague briefs or unreasonable rounds of revisions. Work with brands that respect your authentic storytelling voice.',
      icon: HeartHandshake,
    },
    {
      title: 'Timely, Reliable Payouts',
      desc: 'No chasing late invoices for months. Nexora ensures clean milestones and prompt payment on campaign completion.',
      icon: Clock,
    },
  ];

  const formFieldsPreview = [
    'Your Social Handles (IG / YT)',
    'Niche & Category',
    'Follower Count & Reach',
    'Your City / State',
    'Regional Languages',
    'Collab Preferences',
  ];

  return (
    <section id="for-creators" className="py-24 relative overflow-hidden bg-[#070B16]">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Card */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#121B35] via-[#0E162B] to-[#0A0F1E] border border-pink-500/20 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Headline & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join Nexora Creator Network</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Are You a{' '}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Creator?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
                Your audience has value. Your creativity has value. Let's connect you with brands looking for creators like you.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you have 5,000 or 150,000 followers, brands want your authentic connection with your community. Join our private roster to receive curated brand partnership invites.
              </p>

              {/* Primary Creator CTA pointing to configured Google Form */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-extrabold text-sm shadow-xl shadow-pink-500/25 hover:scale-[1.02] transition-all group"
                    title="Open Google Form Registration"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Join the Nexora Creator Network</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>It takes less than 2 minutes to register.</span>
                </div>
              </div>

              {/* Information collected preview pill */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  What we ask in the registration form:
                </p>
                <div className="flex flex-wrap gap-2">
                  {formFieldsPreview.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Creator Perks Grid */}
            <div className="lg:col-span-5 space-y-4">
              {creatorPerks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-pink-500/40 hover:bg-white/[0.07] transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Quote */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-slate-300">
                <p className="italic">
                  "Nexora brought me my first 3 paid brand deals without me having to cold-DM marketing managers every day."
                </p>
                <div className="mt-2 text-[11px] text-indigo-300 font-semibold">
                  — Food & Lifestyle Creator, Pune (42K Followers)
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
