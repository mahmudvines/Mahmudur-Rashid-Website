import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';

const PROJECTS = [
  {
    number: '01',
    name: 'Saving Beauty Supply',
    type: 'E-commerce · Product redesign',
    description:
      'A complete e-commerce experience designed to make discovering and shopping beauty products feel effortless.',
    image: '/projects/saving-beauty-supply.png',
    alt: 'Saving Beauty Supply e-commerce homepage design',
    href: 'https://www.figma.com/design/kcFSRZljMo0fPBWP1Vdbbe/SBS?node-id=21-141380&t=nqsQ8cIOqYrFmtna-1',
    theme: 'beauty',
  },
  {
    number: '02',
    name: 'Ch4t',
    type: 'Product design · Application redesign',
    description:
      'A full application redesign focused on a clearer, more connected experience across the product.',
    image: '/projects/ch4t.png',
    alt: 'Ch4t application redesign profile and settings screens',
    href: 'https://www.figma.com/design/XfzBvJ1B0UvFmc2IxPtd3K/Ch4t?node-id=2-173142&t=MXbuhYwJ9wPg2Bnr-1',
    theme: 'chat',
  },
  {
    number: '03',
    name: 'Dentix Core',
    type: 'Healthcare · Dental service website',
    description:
      'The visual direction and design system for a new dental service website, with launch planned in 2–3 weeks.',
    image: '/projects/dentix-core.png',
    alt: 'Dentix Core design system for a dental service website',
    href: 'https://www.figma.com/design/ngDXMNdWo6rQ2jJvYJhAVQ/Dentix-Core?node-id=0-1&t=dODeu4WweODxooqy-1',
    theme: 'dentix',
    note: 'Launching in 2–3 weeks',
  },
  {
    number: '04',
    name: 'Kvant',
    type: 'Fintech · Mobile app',
    description:
      'A fintech app concept that brings essential financial and network information into a considered mobile experience.',
    image: '/projects/kvant.png',
    alt: 'Kvant fintech mobile app network status screen',
    href: 'https://www.figma.com/design/YimsmPZ1PcAyxeqGItLeBx/Kvant?node-id=191-3187&t=aTMVl6BohhoNuvBa-1',
    theme: 'kvant',
  },
  {
    number: '05',
    name: 'Website Redesign',
    type: 'Web design · Landing page',
    description:
      'A landing page redesign that turns a complex product story into a clean, confident, easy-to-follow experience.',
    image: '/projects/website-redesign.png',
    alt: 'Website landing page redesign',
    href: 'https://www.figma.com/design/xshTjFuk107jGHI7wSyQoQ/Website-Redesign?node-id=0-1&t=A8w3PubMSBj7i49q-1',
    theme: 'website',
  },
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahmudurashid/' },
  { label: 'Dribbble', href: 'https://dribbble.com/MahmudurUx' },
  { label: 'Behance', href: 'https://www.behance.net/MahmuduRashidux' },
];

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`social-links ${className}`}>
      {SOCIALS.map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer">
          {label}
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      ))}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Mahmudur Rashid home">
        <span className="wordmark-mark">M.</span>
        <span>Mahmudur Rashid</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Selected work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <SocialLinks className="nav-socials" />
        <a className="nav-contact" href="https://www.linkedin.com/in/mahmudurashid/" target="_blank" rel="noreferrer" onClick={closeMenu}>
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Header />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> UI/UX & product designer</p>
          <h1>
            Thoughtful design.
            <br />
            <span>Meaningful</span> digital
            <br />
            experiences.
          </h1>
          <p className="hero-description">
            I&apos;m Mahmudur Rashid — a UI/UX designer shaping useful, clear, and memorable digital products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDownRight aria-hidden="true" size={17} />
            </a>
            <a className="text-link" href="https://www.linkedin.com/in/mahmudurashid/" target="_blank" rel="noreferrer">
              Let&apos;s connect <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src="/portrait.png" alt="Black and white portrait of Mahmudur Rashid" />
          <span className="portrait-caption">MAHMUDUR RASHID <span>— DESIGNER</span></span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Portfolio / 2026</span>
        <a href="#work">Scroll to explore <ArrowDownRight aria-hidden="true" size={15} /></a>
        <span>UI/UX · Product · Web</span>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <article className={`project-card project-${project.theme}`}>
      <a className="project-preview" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} Figma design`}>
        <img src={project.image} alt={project.alt} loading="lazy" />
        <span className="project-open" aria-hidden="true"><ArrowUpRight size={22} /></span>
        {project.note && <span className="project-note">{project.note}</span>}
      </a>
      <div className="project-information">
        <span className="project-number">{project.number}</span>
        <div className="project-details">
          <p className="project-type">{project.type}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on Figma`}>
          <ArrowUpRight aria-hidden="true" size={19} />
        </a>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A few things I&apos;ve been working on</p>
          <h2>Selected work<span className="accent-dot">.</span></h2>
        </div>
        <p className="section-aside">Digital products, useful details, and experiences made with people in mind.</p>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner section-wrap">
        <div className="about-label">
          <p className="eyebrow">A little about me</p>
          <span className="about-index">UI / UX / PRODUCT</span>
        </div>
        <div className="about-copy">
          <h2>
            Good design makes the complex feel <span>simple.</span>
          </h2>
          <p>
            I work across product design, e-commerce, mobile apps, and websites — bringing structure to ideas and care to every interaction. My goal is to make digital experiences that feel intuitive to use and rewarding to come back to.
          </p>
          <p className="about-note">Currently shaping ideas into thoughtful digital products.</p>
          <SocialLinks className="about-socials" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-top section-wrap">
        <p className="eyebrow"><span className="availability-dot" /> Have a good one in mind?</p>
        <h2>Let&apos;s make it<br /><span>matter.</span></h2>
        <a className="button button-light" href="https://www.linkedin.com/in/mahmudurashid/" target="_blank" rel="noreferrer">
          Get in touch <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </div>
      <div className="footer-bottom section-wrap">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">M.</span> Mahmudur Rashid</a>
        <SocialLinks />
        <span className="copyright">© {new Date().getFullYear()} Mahmudur Rashid</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
