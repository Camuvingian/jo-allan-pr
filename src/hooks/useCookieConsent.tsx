import { createContext, useContext, useState } from 'react';

type Consent = 'all' | 'necessary' | null;

const CookieConsentContext = createContext<{
  consent: Consent;
  acceptAll: () => void;
  acceptNecessary: () => void;
}>({
  consent: null,
  acceptAll: () => {},
  acceptNecessary: () => {},
});

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<Consent>(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'all' || stored === 'necessary') return stored;
    return null;
  });

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setConsent('all');
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setConsent('necessary');
  };

  return (
    <CookieConsentContext.Provider value={{ consent, acceptAll, acceptNecessary }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export const useCookieConsent = () => useContext(CookieConsentContext);
