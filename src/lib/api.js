const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed: ${res.status}`);
  }
  return res.json();
}

export const fetchPrograms = () => request('/programs');
export const fetchProgram = (id) => request(`/programs/${id}`);
export const fetchEvents = () => request('/events');
export const fetchNews = () => request('/news');
export const submitContactForm = (payload) =>
  request('/contact', { method: 'POST', body: JSON.stringify(payload) });
export const submitInterestForm = (payload) =>
  request('/get-involved', { method: 'POST', body: JSON.stringify(payload) });
