import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from './SocialIcons';

interface FooterProps {
  onOpenBrandModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandModal }) => {
  return (
    <footer className="bg-[#05070F] border-t border-white/10 pt-16 pb-24 sm:pb-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5">
                <div className="w-full h-full bg-[#05070F] rounded-[10px] flex items-center justify-center font-extrabold text-white text-lg">
                  N
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-white tracking-tight">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                  India
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Connecting Brands With the Next Generation of Creators.
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Nexora empowers Indian consumer and tech brands to orchestrate high-converting micro-influencer campaigns across regional communities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/30 transition-colors"
                aria-label="Nexora on Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                aria-label="Nexora on LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/30 transition-colors"
                aria-label="Nexora on YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                aria-label="Nexora on Twitter"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Nexora</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Creator Categories</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: For Brands */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              For Brands
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenBrandModal}
                  className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Start a Campaign</span>
                  <ArrowUpRight className="w-3 h-3 text-indigo-400" />
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#for-brands" className="hover:text-white transition-colors">Brand Solutions</a>
              </li>
              <li>
                <button
                  onClick={onOpenBrandModal}
                  className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Request Creator Roster
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: For Creators */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              For Creators
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors inline-flex items-center gap-1"
                >
                  <span>Join Nexora</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Creator Network
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Creator FAQ
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Registration Guide
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© 2026 Nexora. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-pink-400" />
              <span>Bengaluru & Pan-India</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Nexora Privacy Policy: We prioritize creator and brand data security. Personal info is used strictly for campaign matching."); }} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Nexora Terms & Conditions: Collaborations are managed transparently with agreed briefs, milestones, and deliverables."); }} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
