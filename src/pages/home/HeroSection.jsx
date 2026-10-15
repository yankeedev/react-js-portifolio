import { profile, stats } from '../../data/portfolio';
import SocialLinks from '../../components/SocialLinks';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Available for freelance work
          </span>

          <h1 className="hero__title">
            Hey, I&apos;m <span>{profile.firstName}</span>
            <br />
            {profile.role}
          </h1>

          <p className="hero__text">{profile.heroDescription}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Let&apos;s talk
            </a>
            <a href="#portfolio" className="btn btn--ghost">
              View my work
            </a>
          </div>

          <div className="hero__social">
            <span className="hero__social-label">Find me on</span>
            <SocialLinks />
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-glow" aria-hidden="true" />
          <img
            className="hero__image"
            src={profile.heroImage}
            alt={`${profile.name}, ${profile.role}`}
          />
          <div className="hero__stats">
            {stats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
