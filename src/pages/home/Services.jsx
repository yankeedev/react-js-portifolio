import { services } from '../../data/portfolio';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">My Services</span>
          <h2>What I can do for you</h2>
          <p>
            From first sketch to launch day, I help teams design and build
            reliable, user-friendly web products.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__icon">
                <img src={service.icon} alt="" aria-hidden="true" />
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
