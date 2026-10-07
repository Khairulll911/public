import type { Project } from "@/data/portfolio";

// Komponen kartu proyek. Semua proyek memakai kartu yang sama.
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {/* Tempat gambar/screenshot proyek */}
      {project.image ? (
        <img className="project-card__image" src={project.image} alt={project.title} />
      ) : project.mediaPlaceholder ? (
        <div className="placeholder project-card__image">{project.mediaPlaceholder}</div>
      ) : null}

      <div className="project-card__body">
        <p className="project-card__label">{project.label}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {project.details.length > 0 && (
          <dl className="project-card__details">
            {project.details.map((d) => (
              <div key={d.term} className="project-card__detail">
                <dt>{d.term}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.subsections.map((s) => (
          <section key={s.title} className="project-card__sub">
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </section>
        ))}

        {project.links.length > 0 && (
          <div className="project-card__links">
            {project.links.map((l) => (
              <a key={l.url} className="button" href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
