import { Link } from 'react-router-dom';
import './Footer.css';

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <div className="footer-brand">
            Jo Allan <span>PR</span>
          </div>
          <p className="footer-address">
            Adam House, 7–10 Adam Street
            <br />
            London WC2N 6AA
          </p>
          <p className="footer-contact-info">
            <a href="mailto:office@joallanpr.com">office@joallanpr.com</a>
            {' · '}
            <a href="tel:02039977477">020 3997 7477</a>
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/joallan_pr/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href="https://twitter.com/JoAllanPR"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <XIcon />
              Twitter
            </a>
          </div>
          <p className="footer-legal">
            &copy; {new Date().getFullYear()} Jo Allan PR Ltd
            <br />
            Company No. 06825956 · VAT No. 973 2358 02
          </p>
        </div>
      </div>
    </footer>
  );
}
