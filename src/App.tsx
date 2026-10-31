import { useState } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Search, Fingerprint, FileCheck2, Radar, LockKeyhole, Check, Menu, X, Globe, ChevronRight } from 'lucide-react';
import './App.css';
import { ProfilePage } from './ProfilePage';

const services = [
  { icon: Radar, number: '01', title: 'Dark web monitoring', text: 'Identify exposed email addresses, credentials, and personal information in monitored breach sources and dark web datasets.', tags: ['Exposure alerts', 'Breach intelligence'] },
  { icon: Fingerprint, number: '02', title: 'Data broker discovery', text: 'Find the people-search sites and data brokers publishing or trading your personal information. Understand what is out there.', tags: ['Personal data discovery', 'Exposure reports'] },
  { icon: FileCheck2, number: '03', title: 'Deletion requests, handled', text: 'With your authorization, we submit opt-out and deletion requests to eligible data brokers on your behalf and track their responses.', tags: ['Authorized requests', 'Status tracking'] },
];
const faqs = [
  ['Can you remove my data from the dark web?', 'We help identify exposure in monitored dark web and breach sources and explain the next steps to secure affected accounts. Copies of leaked data cannot reliably be erased. Deletion requests focus on data brokers and other eligible organizations.'],
  ['How do you act on my behalf?', 'Before submitting requests, we ask for your authorization and the details needed to match your records. Some data brokers may require you to complete an additional identity verification step.'],
  ['What personal information can you look for?', 'The service focuses on identifying exposed contact details, addresses, people-search profiles, and account information associated with the identifiers you authorize us to use. Never share your passwords with us.'],
  ['Is every deletion request successful?', 'Outcomes depend on the source, its policies, and the rights available in your location. We track requests and responses, distinguish pending cases from confirmed removals, and flag cases requiring your attention.'],
  ['Can my information appear again?', 'Yes. Brokers can acquire new records and new breaches can occur. Ongoing checks help identify reappearing information so further action can be taken.'],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  if (window.location.pathname.replace(/\/+$/, '') === '/savikavya-profile') return <ProfilePage />;
  return <div className="privacy-site">
    <nav className="navigation wrap" aria-label="Main navigation">
      <a className="brand" href="#"><span className="brand-icon"><ShieldCheck size={25}/></span>Nexora<span className="brand-dot">®</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)}><a href="#protection">Our protection</a><a href="#how-it-works">How it works</a><a href="#about">Why Nexora</a><a href="#faq">FAQs</a></div>
      <a className="button small nav-cta" href="#get-started">Take back control <ArrowUpRight size={16}/></a>
    </nav>
    <main>
      <section className="hero wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> YOUR PRIVACY. BACK IN YOUR HANDS.</div>
          <h1>Your data is personal.<br/>Let’s keep it <span>that way.</span></h1>
          <p>From dark web leaks to data broker listings, your information travels further than you think. Nexora helps you find it, understand the risk, and request its removal.</p>
          <div className="hero-actions"><a className="button" href="#get-started">Protect my privacy <ArrowUpRight size={19}/></a><a className="text-link" href="#how-it-works">See how it works <ArrowRight size={17}/></a></div>
          <div className="hero-notes"><span><Check size={15}/> Requests made on your behalf</span><span><Check size={15}/> You stay in control</span></div>
        </div>
        <div className="privacy-visual" aria-label="Illustration of privacy protection and example request statuses">
          <div className="visual-grid"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="shield-core"><ShieldCheck strokeWidth={1} size={108}/></div><span className="orbit-point point-one"/><span className="orbit-point point-two"/>
          <div className="signal-card exposure"><span className="signal-icon amber"><Search size={18}/></span><div><strong>Find your digital footprint</strong><small>Dark web & data broker discovery</small></div></div>
          <div className="signal-card removal"><span className="signal-icon"><FileCheck2 size={18}/></span><div><strong>Take action on exposure</strong><small>Deletion requests on your behalf</small></div><Check size={17}/></div>
          <div className="visual-caption"><LockKeyhole size={12}/> LESS EXPOSURE. MORE PEACE OF MIND.</div>
        </div>
      </section>
      <div className="principles"><div className="wrap principles-inner"><span>Built around your privacy</span><span><Search size={18}/> Discover exposed data</span><span><FileCheck2 size={18}/> Request removal</span><span><Radar size={18}/> Monitor for reappearance</span></div></div>
      <section id="protection" className="section wrap"><div className="section-heading"><div><div className="eyebrow">A SMALLER DIGITAL FOOTPRINT</div><h2>Out of sight shouldn’t mean<br/>out of your control.</h2></div><p>One clear path from finding your exposed information to taking action to reduce it.</p></div>
        <div className="service-grid">{services.map(({icon: Icon, ...service}) => <article className="service-card" key={service.number}><div className="card-top"><span className="service-icon"><Icon size={25}/></span><span>{service.number} /</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>
      <section id="how-it-works" className="process-section"><div className="wrap section"><div className="eyebrow">WE DO THE FOLLOWING UP</div><h2>Less paperwork for you.<br/>Less personal data out there.</h2><div className="steps">{[
        ['01', 'Tell us what to protect', 'Provide the identifiers you want checked and authorize us to act on your behalf.'],
        ['02', 'Understand your exposure', 'We identify matching records in monitored sources and explain what needs attention.'],
        ['03', 'Let us handle requests', 'We submit eligible deletion requests, follow up, and keep you informed about the outcome.'],
        ['04', 'Keep your privacy in view', 'Track progress and identify new or reappearing records that may need further action.'],
      ].map(([number,title,text]) => <article key={number}><div className="step-number">{number}<ChevronRight size={17}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="about" className="section wrap about"><div className="about-symbol"><Globe size={145} strokeWidth={0.7}/><span><ShieldCheck size={38}/></span></div><div><div className="eyebrow">YOUR INFORMATION. YOUR SAY.</div><h2>Privacy is personal.<br/>So is our approach.</h2><p>Nexora is a cybersecurity and personal data protection company built to help people regain control of their digital footprint. We turn scattered exposure into clear, actionable next steps.</p><div className="about-points"><span><Check/> Your authorization comes first</span><span><Check/> Clear updates on every request</span><span><Check/> Honest outcomes, without removal guarantees</span></div></div></section>
      <section id="faq" className="section wrap faq"><div><div className="eyebrow">LET’S CLEAR THINGS UP</div><h2>Privacy questions.<br/>Straight answers.</h2></div><div className="faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
      <section id="get-started" className="wrap contact-section"><div className="eyebrow"><ShieldCheck size={16}/> START WITH A CONVERSATION</div><h2>Your next chapter.<br/><span>A little more private.</span></h2><p>Talk to Nexora about finding exposed information and requesting data broker removals on your behalf.</p><a className="button" href="mailto:collaborate@nexoramarketing.in?subject=Personal%20data%20protection%20inquiry">Contact Nexora <ArrowUpRight size={18}/></a><small>Use the existing Nexora contact email. Please don’t send passwords or sensitive identity documents.</small></section>
    </main>
    <footer className="wrap footer"><a className="brand" href="#"><ShieldCheck size={23}/> Nexora</a><p>Find your data. Reclaim your privacy.</p><span>© {new Date().getFullYear()} Nexora</span><a href="#faq">Privacy & removal FAQs <ArrowUpRight size={13}/></a></footer>
  </div>;
}
