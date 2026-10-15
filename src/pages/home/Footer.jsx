import { navLinks, profile } from '../../data/portfolio';
import Icon from '../../components/Icon';
import SocialLinks from '../../components/SocialLinks';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src="/img/logo.svg"
            alt={`${profile.name} logo`}
          />
          <p className="footer__tagline">{profile.tagline}</p>
          <SocialLinks className="footer__socials" />
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <h3 className="footer__heading">Navigate</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3 className="footer__heading">Get in touch</h3>
          <ul>
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Icon name="pin" size={16} />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <a href="#home" className="footer__top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
