import { profile, skills } from '../../data/portfolio';
import Icon from '../../components/Icon';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id="about" className="section section--alt about">
      <div className="container about__inner">
        <div className="about__media">
          <img
            className="about__image"
            src={profile.aboutImage}
            alt={`${profile.name} portrait`}
          />
          <div className="about__chip">
            <Icon name="pin" size={18} />
            {profile.location}
          </div>
        </div>

        <div className="about__content">
          <span className="eyebrow">About Me</span>
          <h2 className="about__title">
            I care about the small details that make a product feel effortless
          </h2>
          <p className="about__text">
            I&apos;m {profile.name}, a {profile.role.toLowerCase()} based in{' '}
            {profile.location}. I specialize in building modern, accessible
            interfaces with React and turning designs into clean, maintainable
            code.
          </p>
          <p className="about__text">
            Whether it&apos;s a marketing site, a dashboard or a full product, I
            focus on performance, usability and the little touches that make an
            experience enjoyable for everyone.
          </p>

          <ul className="about__skills" aria-label="Skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <div className="about__actions">
            <a href="#contact" className="btn btn--primary">
              Let&apos;s work together
            </a>
            <a
              href={profile.resumeUrl}
              className="btn btn--ghost"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
