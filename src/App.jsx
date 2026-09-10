import { useState } from 'react'
import portalBackground from './assets/zeus-portal.svg'
import portalGif from './assets/blackhole.gif'
import './App.css'

const defaultProfile = {
  name: 'Zeus Haitana',
  bio: 'Full-stack developer in progress building practical, user-focused web applications.',
  focus: 'Full-stack systems and AI-powered user experiences.',
  category: 'JavaScript, React, Node.js, Docker',
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/zeush777', detail: '11 public repositories' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zeus-haitana-4a22293bb/', detail: 'Professional profile' },
]

const featuredProjects = [
  { name: 'Mission-Ready', href: 'https://github.com/zeush777/Mission-Ready', detail: 'Full-stack portfolio and project work' },
  { name: 'Turners-Project', href: 'https://github.com/zeush777/Turners-Project', detail: 'Insurance policy advisor application' },
  { name: 'Mission-5-Project-L5', href: 'https://github.com/zeush777/Mission-5-Project-L5', detail: 'JavaScript project work' },
]

const workExperience = {
  organisation: 'CAS',
  programme: 'Collaborative project for CAS',
  sponsor: 'Johannes Dimyadi',
  detail: 'Extended and upgraded a pre-built BIM IFC Model Viewer application with geometric measurement identification and additional model-analysis features as part of a collaborative team.',
  access: 'Project link unavailable due to access restrictions.',
}

const collaborationTeam = [
  { name: 'Eleanor Fakaua', href: 'https://www.linkedin.com/in/eleanorfakaua/' },
  { name: "Lharyzza Va'ai", href: 'https://www.linkedin.com/in/lharyzza-va-ai-499447147/' },
]

const technicalSkills = [
  { name: 'JavaScript', detail: 'Builds practical full-stack application logic.' },
  { name: 'React', detail: 'Creates clear, responsive user interfaces.' },
  { name: 'Node.js', detail: 'Develops backend services and system workflows.' },
  { name: 'Express', detail: 'Connects APIs and server-side application layers.' },
  { name: 'MongoDB', detail: 'Works with flexible application data models.' },
  { name: 'MySQL', detail: 'Structures and queries relational data.' },
  { name: 'Docker', detail: 'Packages applications for consistent deployment.' },
  { name: 'AI integration', detail: 'Explores useful AI-powered user experiences.' },
]

const professionalSummary = 'Zeus is a full-stack developer in progress based in New Zealand, focused on practical web applications, backend systems, AI-powered user experiences, and clear system design.'

const pages = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const profile = defaultProfile
  const [isTeleporting, setIsTeleporting] = useState(false)
  const [activePage, setActivePage] = useState(() => window.location.hash.slice(1) || 'about')

  function teleportToPage(event, pageId) {
    event.preventDefault()
    if (isTeleporting || pageId === activePage) return

    setIsTeleporting(true)
    window.setTimeout(() => {
      window.history.pushState({}, '', `#${pageId}`)
      setActivePage(pageId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setIsTeleporting(false)
    }, 1800)
  }

  return (
    <div className={`portal-scene${isTeleporting ? ' is-teleporting' : ''}`}>
      <img
        className="video-background"
        src={portalBackground}
        aria-hidden="true"
      />
      {isTeleporting && (
        <div className="teleport-overlay" aria-live="polite" aria-label="Teleporting to another section">
          <div className="teleport-portal" aria-hidden="true">
            <img src={portalGif} alt="" />
          </div>
          <p>Redirecting</p>
        </div>
      )}
      <main className="profile-page">
        <header className="site-header">
          <p>Profile</p>
          <span className="header-line" aria-hidden="true" />
          <span>2026</span>
        </header>

        <nav className="profile-nav" aria-label="Profile sections">
          {pages.map((page) => (
            <a className={activePage === page.id ? 'active' : ''} href={`#${page.id}`} onClick={(event) => teleportToPage(event, page.id)} key={page.id}>
              {page.label}
            </a>
          ))}
        </nav>

        <div className="page-content" key={activePage}>
        {activePage === 'about' && <>

      <section className="profile-hero" id="about" aria-labelledby="profile-name">
        <div className="profile-avatar" aria-label="Profile initials">ZH</div>
        <div className="profile-copy">
          <p className="overline">About me</p>
          <h1 id="profile-name">{profile.name}</h1>
          <p className="profile-bio">{profile.bio}</p>
        </div>
      </section>

      <section className="profile-details" aria-label="Profile details">
        <div className="detail-block">
          <p className="overline">Current focus</p>
          <h2>{profile.focus}</h2>
        </div>
        <div className="detail-block detail-accent">
          <p className="overline">Favorite kind of work</p>
          <h2>{profile.category}</h2>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="summary-heading">
        <div className="section-heading">
          <p className="overline" id="summary-heading">Professional summary</p>
        </div>
        <p className="summary-copy">{professionalSummary}</p>
      </section>

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="section-heading">
          <p className="overline" id="skills-heading">Technical skills</p>
        </div>
        <div className="skills-list">
          {technicalSkills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <strong>{skill.name}</strong>
              <span>{skill.detail}</span>
            </article>
          ))}
        </div>
      </section>

        </>}

      {activePage === 'contact' && <section className="subpage-view" aria-labelledby="contact-page-heading">
        <p className="overline">Contact</p>
        <h1 id="contact-page-heading">Find the work online.</h1>
        <p className="subpage-intro">Follow the public work, project notes, and professional profile.</p>
      <section className="profile-links" aria-label="Professional links">
        <div className="section-heading">
          <p className="overline">Find me online</p>
        </div>
        <div className="link-list">
          {socialLinks.map((link) => (
            <a className="profile-link" href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              <span>{link.label}</span>
              <small>{link.detail}</small>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      </section>}

      {activePage === 'projects' && <section className="subpage-view" aria-labelledby="projects-page-heading">
        <p className="overline">Projects</p>
        <h1 id="projects-page-heading">Ideas becoming systems.</h1>
        <p className="subpage-intro">Public work exploring full-stack applications, architecture, and useful interfaces.</p>
      <section className="profile-work" aria-label="Selected projects">
        <div className="section-heading">
          <p className="overline">Selected work</p>
          <p className="section-note">Public projects from GitHub</p>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <a className="project-row" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
              <strong>{project.name}</strong>
              <span>{project.detail}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      </section>}

      {activePage === 'work' && <section className="subpage-view" aria-labelledby="work-page-heading">
        <p className="overline">Work</p>
        <h1 id="work-page-heading">Collaborative systems work.</h1>
        <p className="subpage-intro">Experience extending a pre-built BIM application with a team for CAS.</p>
      <section className="experience-section" aria-label="Work experience">
        <div className="section-heading">
          <p className="overline">Work experience</p>
          <p className="section-note">Professional development</p>
        </div>
        <div className="experience-row">
          <div>
            <h2>{workExperience.organisation}</h2>
            <p>{workExperience.programme}</p>
          </div>
          <div>
            <p className="experience-label">Sponsor</p>
            <p>{workExperience.sponsor}</p>
          </div>
          <div>
            <p className="experience-label">Team</p>
            <div className="team-links">
              {collaborationTeam.map((member) => (
                <a href={member.href} target="_blank" rel="noreferrer" key={member.name}>
                  {member.name} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
          <p className="experience-detail">{workExperience.detail}</p>
          <p className="experience-access">{workExperience.access}</p>
        </div>
      </section>
      </section>}
        </div>

        <footer className="profile-footer">
          <p>Profile information</p>
        </footer>
      </main>
    </div>
  )
}

export default App
