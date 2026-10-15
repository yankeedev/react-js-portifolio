import { useEffect, useState } from 'react';
import { navLinks, profile } from '../../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={closeMenu}
          aria-label={`${profile.name} — home`}
        >
          <img src="/img/logo.svg" alt={`${profile.name} logo`} />
        </a>

        <nav
          id="primary-navigation"
          className={`navbar__nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn--primary navbar__cta"
            onClick={closeMenu}
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__toggle${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
