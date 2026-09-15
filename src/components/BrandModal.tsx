import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Building2, User, Mail, Phone, MapPin, IndianRupee, Target, FileText } from 'lucide-react';
import type { BrandInquiry } from '../types';

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandModal: React.FC<BrandModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BrandInquiry>({
    fullName: '',
    brandName: '',
    email: '',
    phone: '',
    industry: 'D2C & E-Commerce',
    campaignType: 'Micro-Influencer Product Reviews',
    targetAudience: 'Gen-Z & Millennials (18-35)',
    location: 'Pan-India',
    budget: '₹1.5 Lakhs – ₹5 Lakhs',
    details: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BrandInquiry, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Partial<Record<keyof BrandInquiry, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.brandName.trim()) newErrors.brandName = 'Please enter your company or brand name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly describe your campaign goal or product';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate campaign briefing submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      brandName: '',
      email: '',
      phone: '',
      industry: 'D2C & E-Commerce',
      campaignType: 'Micro-Influencer Product Reviews',
      targetAudience: 'Gen-Z & Millennials (18-35)',
      location: 'Pan-India',
      budget: '₹1.5 Lakhs – ₹5 Lakhs',
      details: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div 
          className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#0D1326] border border-white/15 text-left align-middle shadow-2xl transition-all my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-transparent">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                  Brand Campaign Intake
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Tell Us About Your Campaign
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-extrabold text-white">Campaign Brief Received!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.fullName}</span> from{' '}
                  <span className="font-semibold text-white">{formData.brandName}</span>. A Nexora campaign strategist will review your requirements and reach out within 4 business hours.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span>{formData.email} | {formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Campaign:</span>
                    <span>{formData.campaignType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Budget Range:</span>
                    <span>{formData.budget}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs text-slate-400">
                  Fill out your brand details below. Our creator scouts will curate a custom roster tailored to your target audience.
                </p>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Brand / Company Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aura Botanics"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.brandName && <p className="text-[11px] text-rose-400 mt-1">{errors.brandName}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Work Email *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="vikram@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Phone / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Industry & Campaign Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141B33] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                    >
                      <option>D2C & E-Commerce</option>
                      <option>Tech, SaaS & Apps</option>
                      <option>Fashion & Apparel</option>
                      <option>Beauty & Skincare</option>
                      <option>Food, Beverage & Dining</option>
                      <option>Fintech & Financial Services</option>
                      <option>Fitness, Health & Wellness</option>
                      <option>Travel & Hospitality</option>
                      <option>Gaming & Entertainment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Campaign Type</label>
                    <select
                      value={formData.campaignType}
                      onChange={(e) => setFormData({ ...formData, campaignType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141B33] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                    >
                      <option>Micro-Influencer Product Reviews</option>
                      <option>New Brand / Product Launch</option>
                      <option>Regional Vernacular Campaign</option>
                      <option>App Installs & Signups</option>
                      <option>User-Generated Content (UGC)</option>
                      <option>Store / Event Footfall Activation</option>
                    </select>
                  </div>
                </div>

                {/* Target Region & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      <span>Target Location / Cities</span>
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141B33] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                    >
                      <option>Pan-India (Metro + Tier 2)</option>
                      <option>Top Metros (Mumbai, Delhi NCR, Bengaluru)</option>
                      <option>South Hubs (Bengaluru, Hyderabad, Chennai)</option>
                      <option>Western Hubs (Mumbai, Pune, Ahmedabad)</option>
                      <option>Tier 2 & Tier 3 Vernacular Focus</option>
                      <option>Specific Single City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Estimated Budget</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141B33] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                    >
                      <option>₹50,000 – ₹1.5 Lakhs (Pilot / Seeding)</option>
                      <option>₹1.5 Lakhs – ₹5 Lakhs (Multi-Creator Campaign)</option>
                      <option>₹5 Lakhs – ₹15 Lakhs (Comprehensive Push)</option>
                      <option>₹15 Lakhs+ (High Scale Regional Blitz)</option>
                    </select>
                  </div>
                </div>

                {/* Target Audience */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Target Audience Demographic</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Working professionals aged 22-34 in Bengaluru & Mumbai interested in clean eating"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                {/* Campaign Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    <span>Campaign Objective & Details *</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What are you promoting? Mention product link, deliverables expected (e.g. 1 Reel + 2 Stories per creator), or campaign timeline."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                  />
                  {errors.details && <p className="text-[11px] text-rose-400 mt-1">{errors.details}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Brief to Strategist...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Campaign Inquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 No spam. We keep your brand briefs strictly confidential.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
