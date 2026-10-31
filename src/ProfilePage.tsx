import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ShieldCheck, Mail, LockKeyhole, Paperclip, Check, FileSearch, Send, Fingerprint, ArrowRight, Monitor } from 'lucide-react';
import './ProfilePage.css';

const deletionFormUrl = 'https://form.nexora.gripe/';
const mobileProfileQuery = '(max-width: 767px), (pointer: coarse) and (max-height: 500px)';
const attachments = [
  { title: 'Bank information', url: 'https://mega.nz/file/uzJUhIzZ#dEd6hQx2bb-pUFtMjVH5azWZKAAXSKFNER06u9bzUW4' },
  { title: 'Aadhaar card', url: 'https://mega.nz/file/Ci4zAbgB#NpkUsxdCiAckkEe7KqFcRXg1jGleT_vzz0dWKIv-rLY' },
];

export function ProfilePage() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(mobileProfileQuery).matches);
  useEffect(() => {
    const query = window.matchMedia(mobileProfileQuery);
    const updateDevice = () => setIsMobile(query.matches);
    query.addEventListener('change', updateDevice);
    updateDevice();
    return () => query.removeEventListener('change', updateDevice);
  }, []);

  if (isMobile) return <main className="profile-mobile-notice">
    <a className="brand" href="/"><ShieldCheck size={27}/> Nexora</a>
    <section aria-labelledby="desktop-required-title">
      <span className="desktop-notice-icon"><Monitor size={38} strokeWidth={1.5}/></span>
      <div className="eyebrow"><LockKeyhole size={14}/> DESKTOP ACCESS ONLY</div>
      <h1 id="desktop-required-title">Please use a laptop<br/>or desktop.</h1>
      <p>For security, this personal data report is available on a laptop or desktop. Open this same link on your computer to view the report and request data deletion.</p>
      <a className="text-link" href="/"><ArrowLeft size={16}/> Back to Nexora</a>
    </section>
  </main>;

  return <div className="privacy-site profile-page">
    <nav className="navigation wrap" aria-label="Profile navigation"><a className="brand" href="/"><ShieldCheck color="#a2efcf" size={27}/> Nexora</a><a className="text-link" href="/"><ArrowLeft size={15}/> Back to home</a></nav>
    <main className="wrap profile-main">
      <header className="report-header"><div className="eyebrow"><LockKeyhole size={14}/> PERSONAL EXPOSURE REPORT</div><h1>Your privacy.<br className="mobile-break"/> Your next move.</h1><p>Understand what’s been reported. Take a clear step toward removal.</p></header>
      <div className="report-layout">
        <div className="report-content">
          <section className="profile-identity" aria-label="Profile details"><span className="profile-avatar">SK</span><div><h2>Sai Kavya Katta</h2><p><Mail size={14}/> kattasaikavya@gmail.com</p></div><Fingerprint className="identity-mark" size={35} strokeWidth={1}/></section>
          <section className="reported-summary" aria-labelledby="exposure-title"><div className="eyebrow">REPORTED EXPOSURE</div><h2 id="exposure-title">Personal information belongs<br/>in your hands.</h2><p>References have been supplied for reported website and dark web exposure. Review them below before requesting a deletion review.</p><div className="exposure-facts"><div><strong>02</strong><span>Supplied references</span></div><div><strong>1 GB</strong><span>Reported data volume</span></div></div><small>Locations, file size, contents, and association with this email are user-reported and have not been independently confirmed.</small></section>
          <section aria-labelledby="attachments-title" className="profile-findings"><div className="profile-section-title"><h2 id="attachments-title">Attachment references</h2><span>Provided for review</span></div><div className="profile-records">{attachments.map(({title,url},index) => <article key={url} className="profile-record"><span className="attachment-icon"><Paperclip size={19}/></span><div className="attachment-copy"><h3>{title}</h3><p>User-provided description · Attachment {index + 1}</p></div><a href={url} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} attachment`} className="attachment-link">View <ArrowUpRight size={15}/></a></article>)}</div></section>
        </div>
        <section id="deletion-request" className="deletion-panel" aria-labelledby="request-title"><div className="request-emblem"><ShieldCheck size={32} strokeWidth={1.5}/></div><div className="eyebrow">TAKE THE NEXT STEP</div><h2 id="request-title">Take back control<br/>of your personal data.</h2><p className="request-description">Ask Nexora to review the reported sources and seek removal where possible.</p><div className="request-includes"><span><Check size={15}/> Request a review of both sources</span><span><Check size={15}/> Provide your authorization in the form</span><span><Check size={15}/> Seek removal of eligible records</span></div><a className="button request-button" href={deletionFormUrl}>Request data deletion <ArrowRight size={19}/></a><p className="request-destination"><LockKeyhole size={12}/> Continue to form.nexora.gripe to complete your request.</p><div className="request-email-note"><Mail size={17}/><p><strong>Sign in with your primary email</strong><span>When completing the Google Form, use the Google account associated with kattasaikavya@gmail.com. This helps match your request to this profile. Additional ownership verification may be required.</span></p></div><div className="request-process"><h3>What happens next?</h3><div><FileSearch size={17}/><p><strong>Share the details</strong><span>Complete the request form with the information you want reviewed.</span></p></div><div><Send size={17}/><p><strong>Request a removal review</strong><span>Source eligibility and your authorization determine the available next steps.</span></p></div></div><small className="request-note">Opening the form does not submit a request. Removal depends on the source and cannot be guaranteed.</small></section>
      </div>
    </main><footer className="wrap footer"><a href="/" className="brand"><ShieldCheck size={22}/> Nexora</a><p>Find your data. Reclaim your privacy.</p><span>Personal exposure report</span></footer>
  </div>;
}

