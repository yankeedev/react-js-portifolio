import { useMemo, useState } from 'react';
import { projects } from '../../data/portfolio';
import Icon from '../../components/Icon';
import './Portfolio.css';

export default function Portfolio() {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    []
  );
  const [active, setActive] = useState('All');

  const visibleProjects =
    active === 'All'
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Portfolio</span>
          <h2>Recent projects</h2>
          <p>
            A selection of work I&apos;ve designed and built. Each one solved a
            real problem for a real team.
          </p>
        </div>

        <div className="portfolio__filters" role="tablist" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              className={`portfolio__filter${
                active === category ? ' is-active' : ''
              }`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__media">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="project-card__category">{project.category}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__text">{project.description}</p>
                <div className="project-card__footer">
                  <ul className="project-card__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    className="project-card__link"
                    aria-label={`View ${project.title}`}
                  >
                    <Icon name="arrow" size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
