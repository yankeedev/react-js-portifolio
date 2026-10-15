import Icon from './Icon';
import { socials } from '../data/portfolio';
import './SocialLinks.css';

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`socials ${className}`.trim()}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Icon name={social.icon} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
