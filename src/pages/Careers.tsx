import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Careers.css';

export default function Careers() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div
          ref={heroRef}
          className={`fade-up ${heroVisible ? 'visible' : ''}`}
        >
          <div className="section-label">Careers</div>
          <h1 className="section-heading">Join Our <span className="gradient-text">Team</span></h1>
          <p className="careers-subtitle">
            We're always looking for talented, passionate people who love
            theatre. Check back for open positions.
          </p>
        </div>
      </section>

      <section className="careers-content">
        <div
          ref={contentRef}
          className={`careers-message fade-up ${contentVisible ? 'visible' : ''}`}
        >
          <div className="careers-icon">&#9733;</div>
          <h2>No Open Positions</h2>
          <p>
            Thank you for your interest. There are currently no open positions.
          </p>
          <p>
            If you'd like to be considered for future opportunities, please send
            your CV to{' '}
            <a href="mailto:office@joallanpr.com">office@joallanpr.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
