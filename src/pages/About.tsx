import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Jo Allan',
    role: 'Founder',
    bio: 'Extensive theatre PR experience with a background in television drama publicity, personal actor representation, corporate PR for a global TV network, international music festivals, and consumer brands.',
  },
  {
    name: 'Kitty Greenleaf',
    role: 'Associate Director',
    bio: '14 years theatre PR experience handling venues, West End productions, and UK tours.',
  },
  {
    name: 'Freya Cowdry',
    role: 'Associate Director',
    bio: '7 years specialising in theatre PR, with prior marketing and press roles at Theatre Royal Brighton and New Wimbledon Theatre.',
  },
  {
    name: 'Holly Nicholls',
    role: 'Associate Director',
    bio: 'Former Senior Press Officer at National Theatre Productions with 5 years prior experience at a theatre PR agency. Passionate about dance.',
  },
  {
    name: 'Burte Tsogbadrakh',
    role: 'Publicist',
    bio: 'Formerly Press Officer at Lyric Hammersmith Theatre. Holds a BA in Journalism, Communication & Politics.',
  },
];

function AnimatedDiv({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`fade-up ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <AnimatedDiv>
          <div className="section-label">About Us</div>
          <h1 className="section-heading">
            Professional &amp; <span className="gradient-text">Creative</span> Theatre PR
          </h1>
          <p className="about-hero-text">
            Jo Allan PR Ltd is a London-based agency offering a professional and
            creative public relations service covering West End, tours, national
            and international campaigns.
          </p>
        </AnimatedDiv>
      </section>

      <section className="about-mission">
        <AnimatedDiv className="about-mission-inner">
          <div className="about-mission-text">
            <h2 className="section-heading">Our <span className="gradient-text">Mission</span></h2>
            <p>
              We love theatre and our mission is to enhance the success of each
              project working closely with our clients, providing carefully
              designed campaigns and strategies.
            </p>
            <p>
              Founded in 2009, the company has grown to include a sizeable, highly
              motivated staff and management with considerable experience across
              all areas of theatre public relations.
            </p>
          </div>
          <div className="about-mission-accent">
            <div className="accent-card">
              <span className="accent-number">15+</span>
              <span className="accent-label">Years in Theatre PR</span>
            </div>
            <div className="accent-card">
              <span className="accent-number">50+</span>
              <span className="accent-label">Productions Represented</span>
            </div>
          </div>
        </AnimatedDiv>
      </section>

      <section className="about-team">
        <AnimatedDiv className="about-team-header">
          <div className="section-label">The Team</div>
          <h2 className="section-heading">Meet the <span className="gradient-text">Team</span></h2>
        </AnimatedDiv>

        <div className="team-grid">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`team-card fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="team-card-avatar">
        {member.name
          .split(' ')
          .map((w) => w[0])
          .join('')}
      </div>
      <h3>{member.name}</h3>
      <span className="team-role">{member.role}</span>
      <p>{member.bio}</p>
    </div>
  );
}
