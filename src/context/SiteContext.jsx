import { createContext, useContext } from 'react';

// Holds site-wide, rarely-changing data (e.g. contact details, nav config)
// fetched once and shared via context instead of prop-drilling.
export const SiteContext = createContext(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used within SiteContext.Provider');
  return ctx;
}
