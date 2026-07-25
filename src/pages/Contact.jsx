import { useState } from 'react';
import { useContactForm } from '../hooks/useContactForm.js';

const inputClass = 'border border-cream rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold';
const labelClass = 'font-bold text-sm text-navy mb-1 block';

export default function Contact() {
  const [form, setForm] = useState({ name: '', contactMethod: '', reason: '', message: '', consent: false });
  const { status, error, submit } = useContactForm();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit(form);
  }

  return (
    <section className="container py-16 max-w-2xl">
      <h1 className="mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input className={inputClass} id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div>
          <label className={labelClass} htmlFor="contactMethod">Email or phone</label>
          <input className={inputClass} id="contactMethod" name="contactMethod" value={form.contactMethod} onChange={handleChange} required />
        </div>

        <div>
          <label className={labelClass} htmlFor="message">Message</label>
          <textarea className={`${inputClass} min-h-[120px]`} id="message" name="message" value={form.message} onChange={handleChange} required />
        </div>

        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required className="mt-1" />
          I consent to CYAFSF contacting me about this message.
        </label>

        <button className="btn btn-primary self-start" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'success' && <p role="status" className="text-teal font-semibold">Thanks — we'll be in touch.</p>}
        {status === 'error' && <p role="alert" className="text-coral-dark font-semibold">{error || 'Something went wrong. Please try again.'}</p>}
      </form>
    </section>
  );
}
