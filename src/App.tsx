import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { hero, about, skills, education, experience, projects, contact, footer } from "./data/portfolio";
import "./portofolio.css";

// Menu navigasi. Ubah urutan/label di sini.
const NAV = [
  { id: "tentang", label: "Tentang" },
  { id: "keahlian", label: "Keahlian" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "proyek", label: "Proyek" },
  { id: "kontak", label: "Kontak" },
];

export function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="portfolio">
      <header className="site-header">
        <div className="container">
          <a className="site-brand" href="#hero">{hero.name}</a>
          <button className="nav-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
          <nav className={`site-nav${open ? " is-open" : ""}`} aria-label="Navigasi utama">
            <ul>
              {NAV.map((n) => (
                <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="section hero">
          <div className="container">
            <div className="hero__band">
              {/* Foto profil: isi hero.photo di src/data/portfolio.ts */}
              {hero.photo ? (
                <img className="hero__photo" src={hero.photo} alt={hero.name} />
              ) : (
                <div className="placeholder hero__photo">Foto profil [ISI NANTI]</div>
              )}
            </div>
            <div className="hero__body">
              <h1 className="hero__name">
                {hero.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="accent">{hero.name.split(" ").slice(-1)}</span>
              </h1>
              <p className="hero__role">{hero.role}</p>
              <div className="hero__bar" />
              <p className="hero__summary">{hero.summary}</p>
            </div>
          </div>
        </section>

        <section id="tentang" className="section">
          <div className="container">
            <h2>Tentang</h2>
            {about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </section>

        <section id="keahlian" className="section section--surface">
          <div className="container">
            <h2>Keahlian</h2>
            <ul className="skills-grid">
              {skills.map((s) => (
                <li key={s.name} className="skill-card">
                  {/* Slot gambar keahlian — isi s.image di src/data/portfolio.ts */}
                  <div className="skill-card__media">
                    {s.image ? (
                      <img src={s.image} alt={s.name} loading="lazy" />
                    ) : (
                      <span className="skill-card__placeholder">[ISI NANTI] Gambar</span>
                    )}
                  </div>
                  <div className="skill-card__body">
                    <strong>{s.name}</strong>
                    <span className="skill-desc">{s.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pendidikan" className="section">
          <div className="container">
            <h2>Pendidikan</h2>
            <ul className="list">
              {education.map((e) => (
                <li key={e.school} className="list__item">
                  <strong>{e.school}</strong>
                  {e.detail && <span> — {e.detail}</span>}
                  <span className="list__period">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pengalaman" className="section">
          <div className="container">
            <h2>Pengalaman</h2>
            <ul className="list">
              {experience.map((e) => (
                <li key={e.title} className="list__item">
                  {e.title}
                  <span className="list__period">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proyek" className="section">
          <div className="container">
            <h2>Proyek</h2>
            <div className="projects-grid">
              {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
            </div>
          </div>
        </section>

        <section id="kontak" className="section contact">
          <div className="container">
            <h2>Kontak</h2>
            <p>{contact.intro}</p>
            <ul className="list contact-list">
              {contact.items.map((c) => (
                <li key={c.label} className="list__item">
                  <strong>{c.label}:</strong>{" "}
                  {c.url ? (
                    <a href={c.url} {...(c.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{c.text}</a>
                  ) : (
                    <span>{c.text} [ISI NANTI: URL profil]</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">{footer}</div>
      </footer>
    </div>
  );
}
