import React, { useEffect, useRef, useState } from 'react'
import { m, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { content } from './data/content'
import { reveal, stagger, ease, duration } from './lib/motion'
import { useScrollSpy } from './hooks/useScrollSpy'

const nav = [
  ['projects', 'Projects'],
  ['leadership', 'Leadership'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['certifications', 'Certifications'],
  ['contact', 'Contact'],
]

const A = ({ href, children, className = '', ...props }) => (
  <a className={`text-link ${className}`} href={href} {...props}>
    {children}
  </a>
)

function CursorFollower() {
  const cursorRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return undefined
    const cursor = cursorRef.current
    const move = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      cursor.classList.add('visible')
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduce])

  return <span ref={cursorRef} className="cursor-follower" aria-hidden="true" />
}

function SectionHeading({ index, children }) {
  return (
    <m.div className="section-heading" variants={reveal}>
      <span>{index} /</span>
      <h2>{children}</h2>
    </m.div>
  )
}

function Reveal({ children, className = '', ...props }) {
  return (
    <m.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </m.div>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {}
  }, [dark])

  return (
    <button
      className="icon-button"
      aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
      onClick={() => setDark((v) => !v)}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(nav.map(([id]) => id))

  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Back to top">
        AR<span>.</span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {nav.map(([id, label]) => (
          <A key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
            {label}
          </A>
        ))}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <button
          className="menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -12])
  const proofY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -18])

  return (
    <>
      <section id="top" className="hero container" ref={heroRef}>
        <m.div className="hero-copy" style={{ y: copyY }}>
          <m.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration }}>
            Chennai · AI & Data Science
          </m.p>
          <m.h1 initial="hidden" animate="visible" variants={stagger}>
            <m.span variants={reveal} className="outline-name">
              {content.name}
            </m.span>
            <m.span variants={reveal}>{content.headline}</m.span>
          </m.h1>
          <m.p className="hero-intro" initial="hidden" animate="visible" variants={reveal}>
            {content.intro.split('\n').map((line) => (
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <strong>{content.openTo}</strong>
          </m.p>
          <m.div className="hero-actions" initial="hidden" animate="visible" variants={stagger}>
            <m.a variants={reveal} className="button primary" href="#projects">
              View Projects <ArrowUpRight size={16} />
            </m.a>
            {content.resume &&             <m.a variants={reveal} className="button secondary" href={content.resume} target="_blank" rel="noreferrer">
              Download Resume <ArrowUpRight size={16} />
            </m.a>}
            <m.a variants={reveal} className="button text-button" href="#contact">
              Contact <ArrowUpRight size={16} />
            </m.a>
          </m.div>
          <m.div className="proof-strip" initial="hidden" animate="visible" variants={stagger} style={{ y: proofY }}>
            {content.proof.map((item) => (
              <m.div variants={reveal} key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </section>
      <div className="marquee" aria-label="Skills">
        <div className="marquee-track">
          {[...content.marquee, ...content.marquee].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item} <b>✦</b>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

function ProjectCard({ project, expanded, onToggle }) {
  return (
    <m.article
      className={`project-card ${expanded ? 'expanded' : ''}`}
      layout
      variants={reveal}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease }}
      onClick={(event) => {
        if (!event.target.closest('a, button')) onToggle(project.title)
      }}
    >
      <button
        className="card-toggle"
        onClick={(event) => {
          event.stopPropagation()
          onToggle(project.title)
        }}
        aria-expanded={expanded}
      >
        <span className="mono">{project.index}</span>
        <span>
          <span className="project-category">{project.category}</span>
          <span className="project-title">{project.title}</span>
        </span>
        <span className="plus" aria-hidden="true">
          {expanded ? '−' : '+'}
        </span>
      </button>
      <p className="summary">{project.summary}</p>
      <div className="project-preview">{project.built[0]}</div>
      <AnimatePresence initial={false}>
        {expanded && (
          <m.div
            className="project-detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="built">
              <strong>What I built</strong>
              <ul>
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="tags">
              {project.tech.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="limitation">
              <strong>Limitations / next step:</strong> {project.limitation.replace('Next step: ', '')}
            </p>
            <div className="project-links">
              {project.github && (
                <A href={project.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={14} />
                </A>
              )}
              {project.live && (
                <A href={project.live} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={14} />
                </A>
              )}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.article>
  )
}

function Projects() {
  const [openProject, setOpenProject] = useState(null)
  const toggleProject = (title) => setOpenProject((current) => (current === title ? null : title))

  return (
    <section id="projects" className="section container">
      <SectionHeading index="01">Projects</SectionHeading>
      <m.div className="project-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {content.projects.map((p) => (
          <ProjectCard key={p.title} project={p} expanded={openProject === p.title} onToggle={toggleProject} />
        ))}
      </m.div>
    </section>
  )
}

function Leadership() {
  return (
    <section id="leadership" className="section container">
      <SectionHeading index="02">Leadership & Outreach</SectionHeading>
      <div className="timeline">
        {content.timeline.map((item) => (
          <Reveal key={`${item.role}-${item.date}`} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-meta mono">{item.date}</div>
            <div>
              <h3>{item.role}</h3>
              <p className="muted">{item.org}</p>
              <ul>
                {item.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading index="03">Skills</SectionHeading>
      <div className="skills-grid">
        {Object.entries(content.skills).map(([group, items]) => (
          <Reveal key={group}>
            <h3>{group}</h3>
            <div className="tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section container">
      <SectionHeading index="04">Education</SectionHeading>
      <div className="education-list">
        {content.education.map((item) => (
          <Reveal className="credential" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p className="muted">{item.detail}</p>
            </div>
            <span className="mono">{item.date}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section container">
      <SectionHeading index="05">Certifications</SectionHeading>
      <div className="education-list">
        {content.certifications.map((item) => (
          <Reveal className="credential" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
              <p className="muted">{item.detail}</p>
              {item.link && (
                <A href={item.link} target="_blank" rel="noreferrer">
                  View credential <ArrowUpRight size={14} />
                </A>
              )}
            </div>
            <span className="mono">{item.date}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(content.email)}`
  return (
    <section id="contact" className="contact container">
      <SectionHeading index="06">Contact</SectionHeading>
      <div className="contact-inner">
        <h2>Let’s talk about the next opportunity.</h2>
        <p className="muted">I’m currently looking for full-time roles in AI, data, product, partnerships and outreach.</p>
        <div className="contact-links">
          <A href={gmailUrl} target="_blank" rel="noreferrer" className="button primary">
            Email me <ArrowUpRight size={16} />
          </A>
          {content.resume &&           <A href={content.resume} target="_blank" rel="noreferrer" className="button secondary">
            Download resume <ArrowUpRight size={16} />
          </A>}
          <A href={content.linkedin} target="_blank" rel="noreferrer" className="button secondary">
            LinkedIn <ArrowUpRight size={16} />
          </A>
          <A href={content.github} target="_blank" rel="noreferrer" className="button secondary">
            GitHub <ArrowUpRight size={16} />
          </A>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500)
    const onScroll = () => {
      document.documentElement.style.setProperty(
        '--scroll',
        `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
      )
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <m.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 1 }}>
            <m.div
              className="loader-mark"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reduce ? { duration: 0 } : { duration: 0.45, ease }}
            >
              AR<span>.</span>
            </m.div>
            <m.div className="loader-dots" aria-label="Loading" animate={reduce ? undefined : { opacity: [1, 1, 0] }} transition={reduce ? undefined : { duration: 1.2 }}>
              <span />
              <span />
              <span />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
      <CursorFollower />
      <div className="grain" />
      <div className="scroll-progress" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Leadership />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} {content.name}</span>
        <span className="mono">Built with care, not noise.</span>
      </footer>
    </>
  )
}

export { App }
