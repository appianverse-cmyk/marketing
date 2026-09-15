import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brands' | 'creators'>('brands');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_ITEMS.filter((item) => item.category === activeTab);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#090D1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Clear answers for both brand decision-makers and emerging content creators.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 mt-3">
            <button
              onClick={() => {
                setActiveTab('brands');
                setOpenIndex(0);
              }}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'brands'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => {
                setActiveTab('creators');
                setOpenIndex(0);
              }}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'creators'
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Creators
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-slate-300 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
