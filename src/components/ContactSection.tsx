import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Partnership / Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090D1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Indian Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something Meaningful Together
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed">
              Have questions about an upcoming campaign, creator rosters, or custom regional campaigns? Reach out directly to our leadership team.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Brand Collaborations</div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                    {siteConfig.contact.email}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Response within 4 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Line / WhatsApp</div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.phone}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Mon – Sat, 10:00 AM – 7:00 PM IST</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Corporate Headquarters</div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.address.hub}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Operational in Mumbai, Delhi NCR, Hyderabad & Chennai</div>
                </div>
              </div>
            </div>

            {/* Creator Quick Prompt */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-950/30 to-purple-950/30 border border-pink-500/20 text-xs text-slate-300 flex items-center justify-between">
              <span>Are you a creator wanting to join?</span>
              <a
                href={siteConfig.CREATOR_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1"
              >
                <span>Fill Google Form</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Inline Message Box */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Quick Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Prefer leaving a message here? We'll route it to the right team member right away.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-white/[0.02] rounded-2xl border border-white/5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, {formState.name}. We have logged your query and will reply to <span className="text-white font-semibold">{formState.email}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Nair"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="priya@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry Topic</label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141B33] border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500"
                    >
                      <option>General Brand Partnership</option>
                      <option>Agency / Co-marketing Tie-up</option>
                      <option>Regional Vernacular Campaign</option>
                      <option>Press / Media Inquiries</option>
                      <option>Other Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share brief details about your query..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
