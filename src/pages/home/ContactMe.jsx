import { useState } from 'react';
import { profile } from '../../data/portfolio';
import Icon from '../../components/Icon';
import SocialLinks from '../../components/SocialLinks';
import './ContactMe.css';

const initialForm = { name: '', email: '', message: '' };

export default function ContactMe() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (form.message.trim().length < 10) {
      next.message = 'Your message should be at least 10 characters.';
    }
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="eyebrow">Contact</span>
          <h2 className="contact__title">
            Let&apos;s build something great together
          </h2>
          <p className="contact__text">
            Have a project in mind, or just want to say hi? I&apos;m always open
            to new opportunities and collaborations.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__icon">
                <Icon name="mail" size={18} />
              </span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="pin" size={18} />
              </span>
              <span>{profile.location}</span>
            </li>
          </ul>

          <SocialLinks className="contact__socials" />
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {sent && (
            <p className="contact__success" role="status">
              Thanks! Your message has been sent. I&apos;ll get back to you soon.
            </p>
          )}

          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <span className="contact__error">{errors.email}</span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <span className="contact__error">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn--primary contact__submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
