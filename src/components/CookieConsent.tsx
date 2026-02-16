import { useCookieConsent } from '../hooks/useCookieConsent';
import './CookieConsent.css';

function CookieIcon() {
  return (
    <svg className="cookie-icon" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="url(#cookieGrad)" />
      <circle cx="8" cy="9" r="1.4" fill="#5c3d1e" />
      <circle cx="14" cy="7" r="1.1" fill="#5c3d1e" />
      <circle cx="11" cy="14" r="1.3" fill="#5c3d1e" />
      <circle cx="16" cy="13" r="1" fill="#5c3d1e" />
      <circle cx="7" cy="15" r="0.9" fill="#5c3d1e" />
      <defs>
        <linearGradient id="cookieGrad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#e8b86d" />
          <stop offset="100%" stopColor="#c48a3f" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function CookieConsent() {
  const { consent, acceptAll, acceptNecessary } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-content">
          <div className="cookie-banner-header">
            <CookieIcon />
            <h3>This site uses cookies!</h3>
          </div>
          <p>
            We use cookies to enhance your browsing experience and load embedded
            maps. You can accept all cookies or stick to the essentials.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="cookie-btn-accept" onClick={acceptAll}>
            Accept All
          </button>
          <button className="cookie-btn-necessary" onClick={acceptNecessary}>
            Essentials Only
          </button>
        </div>
      </div>
    </div>
  );
}
