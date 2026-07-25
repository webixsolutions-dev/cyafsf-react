import { useState } from 'react';
import { submitContactForm } from '../lib/api.js';

export function useContactForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState(null);

  async function submit(values) {
    setStatus('submitting');
    setError(null);
    try {
      await submitContactForm(values);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  return { status, error, submit };
}
