import { testimonials } from '../../data/portfolio';
import Icon from '../../components/Icon';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section--alt testimonials">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What people say</h2>
          <p>Kind words from clients and teammates I&apos;ve worked with.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <Icon name="quote" size={34} className="testimonial-card__quote" />
              <blockquote className="testimonial-card__text">
                {item.quote}
              </blockquote>
              <figcaption className="testimonial-card__author">
                <img src={item.avatar} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
