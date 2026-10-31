import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import './ThankYouPage.css';

export function ThankYouPage() {
  return <main className="thank-you-page">
    <a className="brand" href="/"><ShieldCheck size={27}/> Nexora</a>
    <section className="thank-you-card" aria-labelledby="thank-you-title">
      <span className="thank-you-icon"><Check size={36}/></span>
      <div className="eyebrow">DELETION REQUEST SUBMITTED</div>
      <h1 id="thank-you-title">Your deletion request<br/>was submitted successfully.</h1>
      <p>Thank you for completing the data deletion request form. Keep your form submission confirmation for your records.</p>
      <div className="thank-you-next"><h2>What happens next?</h2><p>The next step is a review of your authorization and the reported sources to determine which removal requests can be pursued. Successful form submission does not mean your data has already been deleted, and removal cannot be guaranteed.</p></div>
      <a className="button" href="/">Back to Nexora <ArrowRight size={17}/></a>
    </section>
    <small>Find your data. Reclaim your privacy.</small>
  </main>;
}

