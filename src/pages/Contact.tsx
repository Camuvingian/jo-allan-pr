import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCookieConsent } from '../hooks/useCookieConsent';
import './Contact.css';

export default function Contact() {
  const { consent } = useCookieConsent();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div
          ref={heroRef}
          className={`fade-up ${heroVisible ? 'visible' : ''}`}
        >
          <div className="section-label">Get in Touch</div>
          <h1 className="section-heading">Contact <span className="gradient-text">Us</span></h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Get in touch to discuss your next
            campaign or partnership.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div
          ref={formRef}
          className={`contact-form-wrap fade-up ${formVisible ? 'visible' : ''}`}
        >
          <h2>Send a Message</h2>
          {submitted ? (
            <div className="form-success">
              <span className="success-icon">&#10003;</span>
              <p>Thank you for your message. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div
          ref={infoRef}
          className={`contact-info fade-up ${infoVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <div className="info-card">
            <h3>Visit Us</h3>
            <p>
              Adam House
              <br />
              7–10 Adam Street
              <br />
              London WC2N 6AA
            </p>
            <a
              href="https://maps.google.co.uk/maps?q=7-10+Adam+Street,+London+WC2N+6AA"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              View on Map &rarr;
            </a>
          </div>

          <div className="info-card">
            <h3>Call or Email</h3>
            <p>
              <a href="tel:02039977477" className="info-contact">
                020 3997 7477
              </a>
            </p>
            <p>
              <a href="mailto:office@joallanpr.com" className="info-contact">
                office@joallanpr.com
              </a>
            </p>
          </div>

          <div className="info-card">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/joallan_pr/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a
                href="https://twitter.com/JoAllanPR"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-wrap">
          {consent === 'all' ? (
            <iframe
              src="https://maps.google.com/maps?q=Adam+House,+7-10+Adam+Street,+London+WC2N+6AA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Jo Allan PR Office Location"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="map-consent-placeholder">
              <p>
                Enable all cookies to view the embedded map, or{' '}
                <a
                  href="https://maps.google.co.uk/maps?q=7-10+Adam+Street,+London+WC2N+6AA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open in Google Maps
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
